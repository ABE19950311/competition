var chunk = function(arr, size) {
    if(!arr.length) return []

    let res = []
    
    for(let i=0;i<arr.length;i+=size) {
        let val = arr.slice(i,i+size)
        res.push(val)
    }

    return res
};
//arr wo size bun bunkatu site kaesu
//size bun + site loop situtu slice de bunaktu hairetu tukutte kaeriti ni ireru
//+=size de simple ni