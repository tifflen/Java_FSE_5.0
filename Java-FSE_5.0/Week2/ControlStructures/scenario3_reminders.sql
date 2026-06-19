-- Scenario 3: Print reminders for loans due within the next 30 days.
--
-- ASSUMED SCHEMA:
--   loans(loan_id, customer_id, due_date)
--   customers(customer_id, customer_name)

SET SERVEROUTPUT ON;

DECLARE
  v_customer_name customers.customer_name%TYPE;
BEGIN
  FOR r IN (
    SELECT l.loan_id, l.customer_id, l.due_date
    FROM loans l
    WHERE l.due_date BETWEEN TRUNC(SYSDATE)
                         AND TRUNC(SYSDATE) + 30
  ) LOOP

    SELECT c.customer_name
    INTO v_customer_name
    FROM customers c
    WHERE c.customer_id = r.customer_id;

    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Dear ' || v_customer_name ||
      ', your loan (loan_id=' || r.loan_id ||
      ') is due on ' || TO_CHAR(r.due_date, 'YYYY-MM-DD') || '.'
    );
  END LOOP;
END;
/

