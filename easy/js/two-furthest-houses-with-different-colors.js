var maxDistance = function(colors) {
    let res = 0

    for(let i=0;i<colors.length;i++) {
        for(let j=colors.length-1;j>i;j--) {
            if(colors[i]!=colors[j]) {
                res = Math.max(res,j-i)
                break
            }
        }
    }

    return res
};
//colors = [1,1,1,6,1,1,1]
//もっとも遠いことなる色間の距離を返す
//先頭iと末尾j間で比較して不一致あったら記録してその時点で最長だからbreakで抜ける
//いごくりかえす