-- Scenario 2: Set IsVIP = TRUE for customers with balance > 10,000
--
-- ASSUMED SCHEMA:
--   customers(customer_id, balance, IsVIP)
--
-- NOTE:
-- Oracle SQL has no BOOLEAN type in tables.
-- Common choices:
--   - IsVIP is VARCHAR2: use 'TRUE'/'FALSE'
--   - IsVIP is NUMBER(1): use 1/0

SET SERVEROUTPUT ON;

BEGIN
  FOR c IN (SELECT customer_id, balance FROM customers) LOOP
    IF c.balance > 10000 THEN
      UPDATE customers
      SET IsVIP = 'TRUE'
      WHERE customer_id = c.customer_id;

      DBMS_OUTPUT.PUT_LINE('VIP set for customer_id=' || c.customer_id);
    END IF;
  END LOOP;

  COMMIT;
END;
/

