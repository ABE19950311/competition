var judgeCircle = function(moves) {
    let x = 0
    let y = 0

    for(let i=0;i<moves.length;i++) {
        switch(moves[i]) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x++;
                break;
            case "R":
                x--;
                break;
        }
    }

    if(x==0&&y==0) {
        return true
    } else {
        return false
    }
};
//上下左右動いた後に元の位置だったらtrue
//x座標、y座標で変数用意、加算減算して、両方０だったらtrue返す
