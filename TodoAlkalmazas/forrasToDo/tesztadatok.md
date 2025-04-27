# teszt eseményket készít

```sql
DELIMITER $$

CREATE PROCEDURE GenerateTestEvents(IN eventCount INT)
BEGIN
  DECLARE i INT DEFAULT 1;

  WHILE i <= eventCount DO
    INSERT INTO events (title, description, date, user_id, category_id)
    VALUES (
      CONCAT('Teszt esemény ', i),
      CONCAT('Automatikusan generált esemény leírása ', i),
      -- véletlen dátum 2025-01-01 és 2025-12-31 között
      DATE_ADD('2025-01-01', INTERVAL FLOOR(RAND() * 365) DAY),
      -- véletlen user_id 1 vagy 2 közül
      FLOOR(1 + (RAND() * 2)),
      -- véletlen category_id 1 és 3 között
      FLOOR(1 + (RAND() * 3))
    );
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;
```