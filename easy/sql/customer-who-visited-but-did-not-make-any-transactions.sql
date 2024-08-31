select customer_id,count(*) as count_no_trans
from Visits left join Transactions on Visits.visit_id=Transactions.visit_id
where Transactions.visit_id is null
group by Visits.customer_id
--両テーブルのvisit_idに一致しないcustomer_idと集計を返す
--一致しないものは外部結合した後にwhere is nullで抽出できる