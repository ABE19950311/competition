var replaceElements = function(arr) {
    let max = -1

    for(let i=arr.length-1;i>=0;i--) {
        const cur = arr[i]
        arr[i] = max
        max = Math.max(max,cur)
    }
    
    return arr
};
//arr[i]をarr[i+1]以降要素の最大値にかえる
//末尾は-1にする
//末尾から置き換えていけば、毎回先頭から残り要素分最大値探す必要なくなる