select sell_date,count(distinct sell_date,product) as num_sold,group_concat(distinct product order by product asc separator ",") as products
from Activities
group by sell_date
--sell_dateでグループ
--重複は消す
--groupのリストをgroup_concatで表示できてその中でorderbyとsepartor指定で並び替えもできる
