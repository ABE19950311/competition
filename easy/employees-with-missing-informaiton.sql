select t.employee_id
from (
    select e.employee_id from Employees e left join Salaries s on e.employee_id=s.employee_id
    where s.salary is NULL
    union
    select s.employee_id from Employees e right join Salaries s on e.employee_id=s.employee_id
    where e.name is NULL
) as t
order by t.employee_id
--両テーブルで一致しないIDを一つのカラムにして返す
--一つのカラムにするのはunionを使う
--左外部結合→Employees基準。Slariesに存在しないID箇所はnullになる→slaryカラムがnullのものをとればSlararieテーブルにないやつがわかる
--同様に右外部結合でSlaralier基準でEmployeeテーブルに存在しないIDを取り出す
--取り出したてemployee_idからunionで結合したものをtとして定義する
--そのtのemployee_idを昇順にして返す