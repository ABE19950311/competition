SELECT w1.id
FROM Weather w1,Weather w2
WHERE datediff(w1.recordDate,w2.recordDate)=1 and w1.temperature > w2.temperature
--元テーブルを複製して元カラムの全組み合わせをつくる
--datediffで日付の差分が１の範囲でtempatureの確認をする