var filter = function(arr, fn) {
    let res = []

    for(let i=0;i<arr.length;i++) {
        if(fn(arr[i],i)) {
            res.push(arr[i])
        }
    }

    return res
};
//kansu fn no kekka(true,false)ni yotte arr wo filter suru
//fn no kekka if de mite true nara kaeriti you hairetuni ireru