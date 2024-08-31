SELECT Employee.name,Bonus.bonus
FROM Employee
LEFT JOIN Bonus ON Employee.empId = Bonus.empId
WHERE bonus<1000 OR bonus is NULL
--leftjoinで両テーブルつける。
--存在しないデータはNULLになるため、bonus1000未満かNULLを持ってくる