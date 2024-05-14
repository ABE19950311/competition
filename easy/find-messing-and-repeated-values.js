var findMissingAndRepeatedValues = function(grid) {
    let flat = grid.flat()
    let arr = new Array(flat.length).fill(0)
    let dup = 0
    let none = 0
    flat.forEach((data)=>{
        if(flat.includes(data)) {
            arr[data-1] = arr[data-1]?arr[data-1]+1:1
        }
    })
    arr.forEach((data,index)=>{
        if(data==0) {
            none = index+1
        } else if(data==2) {
            dup = index+1
        }
    })
    return [dup,none]
};
//１からlengthまで要素が入っている
//重複してる奴とないやつを探して返す
//lengthまでの容量の配列作ってとりあえず０つめておく
//配列要素位置を+1していく
//重複してたら２になるしなかったら０のまま
//2と０の要素位置がそのまま目的の数になるから返す