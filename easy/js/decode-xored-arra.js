var decode = function(e, f) {
    let a = [f]

    for(let i=0;i<e.length;i++) {
        a.push(a[i]^e[i])
    }

    return a
};