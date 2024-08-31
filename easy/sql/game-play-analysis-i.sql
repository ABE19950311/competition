SELECT player_id,MIN(event_date) as first_login
FROM Activity
GROUP BY player_id
--playeridとevent_dateの最小値をfirst_loginに名前変えてとる
--GROUP BYでplayer_idごとにevent_dateの最小値を取得する
