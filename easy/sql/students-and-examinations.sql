select s.student_id,s.student_name,sub.subject_name,count(e.student_id) as attended_exams
from Students s
cross join Subjects sub
left join Examinations e on s.student_id=e.student_id and sub.subject_name=e.subject_name
group by s.student_id,s.student_name,sub.subject_name
order by s.student_id
--studentid,studentname,subjectnameの組み合わせの数をカウントして返す
--どの生徒が何個subject持ってるかはexaminationsテーブルにあるが、生徒IDがないものがある
--studentsとsubjectテーブルのcrossjoin（全パターン組み合わせ）してからexaminatosテーブルと結合する
--ないものもカウントするため外部結合、IDだけで結合するとsubjectが一致してないものもくっつけるためidとsubjectnameでくっつける
--countするのはExaminatonテーブルのid、Stundetnテーブルは全パターン結合してるから必ずID存在していることになる
