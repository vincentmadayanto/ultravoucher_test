SELECT
    id,
    name,
    (SELECT name FROM people WHERE id = p.parent_id) AS parent_name
FROM people p;