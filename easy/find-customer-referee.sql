SELECT Customer.name
FROM Customer
WHERE referee_id!=2 OR referee_id is NULL
--whereでnull取ってくる際、明示的にis NULLで指定しないと取ってこない
