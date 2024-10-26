var sumOfEncryptedInt = function(nums) {
    let res = 0
    nums.forEach((num)=>{
        let arr = num.toString().split("")
        let max = Math.max(...arr)
        for(let i=0;i<arr.length;i++) {
            arr[i] = max
        }
        res += parseInt(arr.join(""))
    })
    return res
};
//[10,12,13]
//[11,22,33] = 66
//かくようそかくけたの最大値におきかえた後合計返す
//かくようそforeachして分割する。最大値はスプレッド構文で配列ようそ流してMath.maxすればかんけつにとれる
//かくようそ最大値におきかえたあとひとつの数値にもどす