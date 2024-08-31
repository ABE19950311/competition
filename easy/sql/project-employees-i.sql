select project_id,round(avg(experience_years),2) as average_years
from Project inner join Employee on Project.employee_id=Employee.employee_id
group by project_id
--emplyeeee-idで内部結合してyeasssrsの平均だす
--round関数で四捨五入ができる
--桁数も指定できる