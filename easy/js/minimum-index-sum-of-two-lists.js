var findRestaurant = function(list1, list2) {
    // let map = {}
    // let min = Infinity
    // let res = []
    // for(let i=0;i<list1.length;i++) {
    //     for(let j=0;j<list2.length;j++) {
    //         if(list1[i]==list2[j]) {
    //             map[i+j] = map[i+j]?`${list1[i]},${map[i+j]}`:list1[i]
    //         }
    //     }
    // }
    // const mapArray = Object.keys(map)
    // mapArray.forEach((data)=>{
    //     if(Number(data)<min) min=Number(data)
    // })
    // mapArray.forEach((data)=>{
    //     if(Number(data)==min) res= map[data].split(",")
    // })
    // return res
    let map = {}
    let min = Infinity
    let res = []
    for(let i=0;i<list1.length;i++) {
        map[list1[i]] = i
    }
    for(let j=0;j<list2.length;j++) {
        if(map.hasOwnProperty(list2[j])) {
            let sum = map[list2[j]]+j
            if(sum<min) {
                min=sum
                res = [list2[j]]
            } else if(min==sum){
                res.push(list2[j])
            }
        }
    }
    return res
};
//list1,list2両方に存在してかつ添字の合計値が最も低いvalueを返す
//オブジェクト用意して、list1のvalueと添字入れる
//hasOwnProperyで同じkeyがあるかわかる
//同じkeyあったら添字合計確認して最小なら更新して配列にvalue入れる
//最小値と同じならpush