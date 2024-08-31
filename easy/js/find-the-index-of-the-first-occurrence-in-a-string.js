var strStr = function(haystack, needle) {
    //return haystack.indexOf(needle)
    for(let i=0;i<haystack.length;i++) {
        if(haystack[i]==needle[0]) {
            for(let j=0;j<needle.length;j++) {
                if(needle[j]!=haystack[i+j]) {
                    break;
                } else if(j==needle.length-1){
                    return i
                }
            }
        }
    }
    return -1
};
//indexOfメソッドで解けるけど使わない
//haystack文字の長さ分ループ
//heystac[i]番目とneedle[0]番目が一致したらneedle全てに一致するか検索開始
//needle文字分ループ
//needleとhaystack一致しなかったらbreak
//needle分ループ回ったら全一致として最初のヒット一iを返す
//iが返らなかったら一致なしのため-1を返す