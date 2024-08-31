var averageOfLevels = function(root) {
    let q = [root]
    let res = []
    while(q.length) {
        let length = q.length
        let sum = 0
        for(let i=0;i<length;i++) {
            let cur = q.shift()
            sum += cur.val
            if(cur.left) q.push(cur.left)
            if(cur.right) q.push(cur.right)
        }
        res.push(sum/length)
    }
    return res
};
//bfsで
//lengthはshiftで減っていくから元々の長さを代入して保持しておく