var reformatDate = function(date) {
    let [day,month,year] = date.split(" ")
    const months = {
        "Jan":"01", 
        "Feb":"02", 
        "Mar":"03", 
        "Apr":"04", 
        "May":"05", 
        "Jun":"06", 
        "Jul":"07", 
        "Aug":"08", 
        "Sep":"09", 
        "Oct":"10", 
        "Nov":"11", 
        "Dec":"12"
    }

    if(day.length==3) {
        day = "0" + day
    }
    day = day.match(/[0-9][0-9]/g).join("")
    return `${year}-${months[month]}-${day}`
};
//"20th Oct 2052"
//Output: "2052-10-20" で返す
//配列に分割してそれぞれ処理する。分割代入使ったらいい感じにできる
//月変換は変換用オブジェクト用意しとけばおk
//formatして返す際はリテラル形式で返せばよりしんぷる