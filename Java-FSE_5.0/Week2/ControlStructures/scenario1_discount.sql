-- Scenario 1: Apply a 1% discount to loan interest rates
-- for customers above 60 years old.
--
-- ASSUMED SCHEMA:
--   customers(customer_id, age)
--   loans(customer_id, current_interest_rate)

SET SERVEROUTPUT ON;

DECLARE
  v_age customers.age%TYPE;
BEGIN
  FOR c IN (SELECT customer_id, age FROM customers) LOOP
    v_age := c.age;

    IF v_age > 60 THEN
      UPDATE loans
      SET current_interest_rate = current_interest_rate * 0.99
      WHERE customer_id = c.customer_id;

      DBMS_OUTPUT.PUT_LINE('Discount applied for customer_id=' || c.customer_id);
    END IF;
  END LOOP;

  COMMIT;
END;
/

