var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let map = {}
    nums2.forEach((data)=>{
        while(stack.length&&stack[stack.length-1]<data) {
            map[stack.pop()] = data
        }
        stack.push(data)
    })
    return nums1.map((data)=>{
        return map[data]||-1
    })
};
//nums1の値がnums2にあって、かつ、その値の次以降でより大きい値があったら出力する
//nums1はnums2の部分集合
//先にnums2の配列回して、値をstackに入れる
//stackがあってかつ現在見てるdataの方がおおきかったら参照用mapに入れる
//大きくなかったらstackに積んでいく
//最後にnums1をmapで返り値ように作り替える