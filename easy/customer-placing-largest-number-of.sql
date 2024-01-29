SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY count(*) DESC
LIMIT 1
--customer_numberでグループ count(*)で行数算出
--customer_number count(*)
--    1            5
--    3            3
--    2            1