SELECT Customers.name as Customers
FROM Customers LEFT JOIN Orders
ON Customers.id = Orders.customerId
WHERE Orders.customerId IS NULL
--外部結合でcustomers.idとOrders.customerIdを紐付けて
--customerIdがない（NULL)を割り出す
--whereでcustomerIdがNULLを抽出する