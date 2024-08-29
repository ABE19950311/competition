var splitWordsBySeparator = function(words, separator) {
    // let arr = []
    // let res = []
    // words.forEach((word)=>{
    //     arr.push(word.split(separator).filter((word)=>word!=""))
    // })
    // arr.forEach((data)=>{
    //     data.forEach((data)=>{
    //         res.push(data)
    //     })
    // })
    // return res
    return words.join(separator).split(separator).filter((a)=>a!="")
};
//separatordemoziwokugireturn
//kugirimozidetouirtusite,dekugiru nullfileter