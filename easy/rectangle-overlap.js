var isRectangleOverlap = function(rec1, rec2) {
    const [Ax1,Ay1,Ax2,Ay2] = rec1
    const [Bx1,By1,Bx2,By2] = rec2
    return Ax1<Bx2&&Ax2>Bx1&&Ay1<By2&&Ay2>By1
};
//分割代入で各座標いれる
//左x1座標が右x2より小さい〜の条件全て満たしたらtrue