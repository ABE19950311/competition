var summaryRanges = function(nums) {
    let array = []
    let start = 0
    for(let i=1;i<=nums.length;i++) {
        if(nums[i]-nums[i-1]>1 || i==nums.length) {
            if(i-start>1) {
                array.push(`${nums[start]}->${nums[i-1]}`)
            } else {
                array.push(String(nums[i-1]))
            }
            start = i
        }
    }
    return array
};
//iは１から始める
//隣同士の値を比較して差分１以上あるか確認する
//[i+1]-[i]でやると末尾位置の検証ができないためiを1から始めて[i]-[i-1]で見る
//差分１以上あってかつ、rangeのstart位置が1以上離れていたら、range範囲を配列に入れる
//range1以上離れてなかったらrangeになってないためそのまま値を配列にpush
//range配列入れたらrangeのstart位置を更新する
//末尾値のpush対応をするためiがnums.lengthも条件に入れる
//nums.lengthをみるためloop条件は<=にする,nums[i-1]で末尾の値をpushする
