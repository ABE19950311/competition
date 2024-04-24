var minOperations = function(logs) {
    let step = 0
    for(let i=0;i<logs.length;i++) {
        if(logs[i]=="../") {
            // step = step == 0 ? 0:step-1
            step = Math.max(0,step-1)
        } else if(logs[i]=="./") {
            continue
        } else {
            step += 1
        }
    }
    return Math.max(0,step)
};
//ディレクトリ移動後/まで戻るのに何階層必要か返す
