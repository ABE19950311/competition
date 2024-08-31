SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(class) >= 5
--group byでclass項目毎にまとめる
--レコード５以上を抽出