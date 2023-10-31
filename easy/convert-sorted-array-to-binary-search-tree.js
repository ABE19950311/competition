var sortedArrayToBST = function(nums,start=0,end=nums.length-1) {
    while(start<=end) {
    let mid = Math.ceil((start+end)/2)
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums,start,mid-1)
    root.right = sortedArrayToBST(nums,mid+1,end)
    return root
    }
    return null
};
//再起関数で２分木を作る
//Math.floorだと作れない、Math.ceilを使う　
//少数切捨て、切り上げの差に注意
//再起関数の際に、left,rightで範囲を切り分ける
//[0,1,2,3,4]
//root.left=[0,1]
//root.right=[3,4]
