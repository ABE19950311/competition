select *
from Cinema
WHERE mod(id,2)!=0 and description!="boring"
order by rating desc
--id奇数はmodの結果で求める