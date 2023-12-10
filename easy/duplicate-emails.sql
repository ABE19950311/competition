SELECT email as Email
FROM Person
GROUP BY email
HAVING count(email) > 1
--出力カラム名テーブルにないためasで変える
--カラムemailについてGROUPBYで集計する
--カラムemailの値の中で1回より多く出たやつを抽出する
