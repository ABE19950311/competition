var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++) {
        if(flowerbed[i]==1) {
            if(flowerbed[i+1]==0&&flowerbed[i-1]==0) {
                flowerbed[i+1] = 1
                flowerbed[i-1] = 1
                i++
            } else if(flowerbed[i+1]==0) {
                flowerbed[i+1] = 1
                i++
            } else if(flowerbed[i-1]==0) {
                flowerbed[i-1] = 1
            }
        }
    }
    for(let j=0;j<flowerbed.length;j++) {
        if(flowerbed[j]==0&&flowerbed[j-1]==0) {
            flowerbed[j]=1
        }
    }
    const canUse = flowerbed.filter(data => data==0).length

    if(canUse>=n) {
        return true
    } else {
        return false
    }
};
//花をうえていく。花は隣り合せには植えれない
//花があったら（１なら）前後には新規に植えれないため仮定で１を入れる
//残った０のうち、０が隣り合ってたら１個しか植えれないため、改めて確認する
//最終的に残った０が植えたい本数（n)を上回ってればおk