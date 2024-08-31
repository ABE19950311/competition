SELECT Person.lastName,Person.firstName,Address.city,Address.state
FROM Person LEFT JOIN Address
ON Person.personId = Address.personId
-- PersonテーブルとAddressテーブルをpersonIDで外部結合したテーブルから
--lastName,firstName,city,stateをとる