var largeGroupPositions = function(s) {
    // let res = []
    // let start = 0
    // for(let i=1;i<s.length;i++) {
    //     let tmp = s[i-1]
    //     if(s[i]!=tmp&&((i-1)-start)+1>=3) {
    //         res.push([start,i-1])
    //         start = i
    //     } else if(s[i]==tmp&&(i-start)+1>=3&&i==s.length-1) {
    //         res.push([start,i])
    //     } else if(s[i]!=tmp) {
    //         start = i
    //     }
    // }
    // return res
    let res = []
    let start = 0
    for(let i=1;i<=s.length;i++) {
        if(s[i]!=s[i-1]||i==s.length) {
            if(((i-1)-start)+1>=3) {
                res.push([start,i-1])
                start = i
            } else {
                start = i
            }
        }
    }
    return res
};
//連続で３つ以上同じ単語が続くグループのstartとendの二次元配列を返す
//現在の文字が一個前と違うかイテレータが配列lengthだったら
//前回のstart位置から３つ以上離れてたらpush
//違ってもstartは更新する
//i<=s.lengthにしてるのは配列末尾位置からif(((i-1)-start)+1>=3)の計算の整合をとるため
