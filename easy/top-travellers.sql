select name,ifnull(sum(distance),0) as travelled_distance
from Users left join Rides on Users.id=Rides.user_id
group by user_id
order by travelled_distance desc,name asc
--各トラベラーの合計距離を出す
--travellraが紐づかない箇所も０として出す
--外部結合してnullをifnullで０にかえる