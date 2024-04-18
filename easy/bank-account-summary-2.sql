select name,sum(amount) as balance
from Users inner join Transactions on Users.account=Transactions.account
group by Transactions.account having sum(amount)>10000
--userに紐づくammountの合計値が10000を超える奴をだす
--内部結合でくっつけて集計すればok