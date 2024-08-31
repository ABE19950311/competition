SELECT max(num) as num
FROM MyNumbers
WHERE num IN (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING count(num)=1
)
-- where inで一回だけ出てる数字を集計する
--その集計結果から最も大きい値をとる