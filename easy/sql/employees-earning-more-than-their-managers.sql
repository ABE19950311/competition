SELECT e.name as Employee
FROM Employee m
INNER JOIN Employee e ON m.id = e.managerId
WHERE m.salary < e.salary
--出力カラム値が元テーブルにないEmployeeのためasで名前変える
--比較用の従業員テーブルとmanagerテーブルを作る
--INNER JOINでidとmanagerIdが一致したテーブル作る
--id name salaly managerId name ...
--1  hoge   20000   2      hoge2
--SELECTで対象テーブル指定を忘れないように