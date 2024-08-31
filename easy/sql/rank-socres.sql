select s1.score,
(select count(distinct s2.score) from Scores s2 where s2.score>=s1.score) as "rank"
from Scores s1
order by score desc
--socreを降順にランク付けする
--rankは現在のscoreが他のscoreより大きい数を数えればわかる、一番大きかったらないからcountは１になる
--rankを求める際はサブクエリで求めてasで絡む名をつける