select actor_id,director_id
from ActorDirector
group by actor_id,director_id
having count(timestamp)>=3
--actorとdirectorが３回以上登場するidの組み合わせを返す
--actorとdirector両方で集計する