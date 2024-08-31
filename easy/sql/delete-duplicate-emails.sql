DELETE p1
FROM Person p1,Person p2
WHERE p1.email = p2.email AND p1.id>p2.id
--Personテーブルをp1とp2に複製
--emailが一致かつp1.idがp2.idより大きいカラムを抽出して削除する
--p1.id>p2.idの理由は、idが後の方のカラムを消すため
--1 john@example.com 1 john@example.com
--1 john@example.com 2 bob@example.com
--1 john@example.com 3 john@example.com
--2 bob@example.com 1 john@example.com
--2 bob@example.com 2 bob@example.com
--2 bob@example.com 3 john@example.com
--3 john@example.com 1 john@example.com
--3 john@example.com 2 bob@example.com
--3 john@example.com 3 john@example.com