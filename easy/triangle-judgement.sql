SELECT *,IF(x+y>z and y+z>x and x+z>y,"Yes","No") as triangle
FROM Triangle
--sqlもIF文でtrue,false挿入するデータとasでカラム名を決めれる