var longestSubstring = function(s, k) {
    if(k==1) return s.length
    let maxUniqueSize = new Set(s).size
    let max = 0

    for(let i=1;i<=maxUniqueSize;i++) {
        let obj = {}
        let start = 0
        let uniqueCount = 0
        let leastCountK = 0
        for(let end=0;end<s.length;end++) {
            obj[s[end]] = obj[s[end]]?obj[s[end]]+1:1
            if(obj[s[end]]==k) leastCountK++
            if(obj[s[end]]==1) uniqueCount++

            while(uniqueCount>i) {
                if(obj[s[start]]==k) leastCountK--
                obj[s[start]] = obj[s[start]]-1
                if(!obj[s[start]]) uniqueCount--
                start++
            }

            if(uniqueCount==leastCountK) {
                max = Math.max(max,end-start+1)
            }
        }
    }
    return max
};
//k以下の長さになる最長部分文字列を返す
//k以下の長さの文字列が含んでいたら対象外
//最大何文字重複するかsetで出す
//最大重複文字分ループする.i=1なら１文字までの重複、２なら２文字までの重複範囲内で調べる
//objで文字の登場回数数える.１回でたらuniqueカウントする。k以上になったらその文字は対象になるためleastCountKカウント
//uniqueCountがiを超えたらstartを１文字ずらす。ずらすことで条件を満たさない文字を除外する
