var convertTime = function(current, correct) {
    // let count = 0
    // let cur_num = current.split(":").map((data)=>Number(data))
    // cur_num = (cur_num[0]*60)+cur_num[1]
    // let cor_num = correct.split(":").map((data)=>Number(data))
    // cor_num = (cor_num[0]*60)+cor_num[1]
    // let diff = cor_num - cur_num
    // while(diff) {
    //     if(diff-60>=0) {
    //         diff -= 60
    //     } else if(diff-15>=0) {
    //         diff -= 15
    //     } else if(diff-5>=0) {
    //         diff -= 5
    //     } else if(diff-1>=0) {
    //         diff -= 1
    //     }
    //     count++
    // }
    // return count
    let count = 0

    let cur_num = current.split(":").map((data)=>Number(data))
    cur_num = (cur_num[0]*60)+cur_num[1]
    let cor_num = correct.split(":").map((data)=>Number(data))
    cor_num = (cor_num[0]*60)+cor_num[1]
    let diff = cor_num - cur_num

    count += Math.floor(diff/60)
    diff %= 60
    count += Math.floor(diff/15)
    diff %= 15
    count += Math.floor(diff/5)
    diff %= 5
    count += diff

    return count
};
// current = "02:30", correct = "04:35"
//currentからcorrectまでの差分うめるのに何回必要か返す
//60,15,5,1のいずれかつかえる
// - Add 60 minutes to current. current becomes "03:30".
// - Add 60 minutes to current. current becomes "04:30".
// - Add 5 minutes to current. current becomes "04:35".
//とあるので時間は分単位で計算する
//:で分割したあと数字にして時間部分*60して差分だす
//53/15=3のようにわれば何回１５等でくりかえすか一回でわかる
//53%15=8で計算後もわかる
//われないならそのままカウントすればいい
//るーぷが不要になる！