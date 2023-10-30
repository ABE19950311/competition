var maxDepth = function(root,depth=0) {
    if(!root) return depth
    depth++
    return Math.max(maxDepth(root.left,depth),maxDepth(root.right,depth))
};
//再起関数で総当たり
//rootのleft,rightを入れたらleft,rightがそれぞれrootになって左右辿れる
//深さ測定用のdetphを用意
//最終的に最も高いdepthの帰り値をMath.maxで取る