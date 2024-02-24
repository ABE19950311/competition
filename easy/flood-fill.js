var floodFill = function(image, sr, sc, newColor) {
    let curColor = image[sr][sc]
    if(curColor==newColor) return image

    function helper(image,row,col) {
        if(row>=image.length||row<0||col>=image[0].length||col<0||image[row][col]!=curColor) return
        image[row][col] = newColor
        helper(image,row-1,col)
        helper(image,row+1,col)
        helper(image,row,col-1)
        helper(image,row,col+1)
        return image
    }

    return helper(image,sr,sc)
};
//指定したcolorで指定いた位置を起点で塗りつぶしていく
//指定位置のcolorがnewColorと同じならそのまま返す
//再起的に塗りつぶし対象から調べて塗りつぶしていく
//helper(image,row-1,col) 上の位置を調べる
//helper(image,row+1,col)　下調べる
//helper(image,row,col-1)　左調べる
//helper(image,row,col+1)　右調べる
//row,colが配列対象外にでるか、指定位置の元々のcolorじゃなかったらそこで調査終わる
