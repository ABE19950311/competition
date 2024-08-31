var finalPositionOfSnake = function(n, commands) {
    let arr = []
    let x = 0
    let y = 0
    for(let i=0;i<n;i++) {
        let tmp = []
        for(let j=i*n;j<(i*n)+n;j++) {
            tmp.push(j)
        }
        arr.push(tmp)
    }
    commands.forEach((data)=>{
        switch(data) {
            case "UP":
                x-=1
                break
            case "DOWN":
                x+=1
                break
            case "LEFT":
                y-=1
                break
            case "RIGHT":
                y+=1
                break
        }
    })
    return arr[x][y]
};
//n*nの二次元配列からcommandsで移動した先の要素を返す