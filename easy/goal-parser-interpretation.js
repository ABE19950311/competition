var interpret = function(command) {
    // let stack = []
    // let res = ""
    // for(let i=0;i<command.length;i++) {
    //     if(command[i]=="G") {
    //         res += "G"
    //     } else if(command[i]==")") {
    //         let tmp = stack.pop()
    //         if(tmp=="(") {
    //             res+="o"
    //         } else if(tmp=="l") {
    //             res+="al"
    //         }
    //     } else {
    //         stack.push(command[i])
    //     }
    // }
    // return res
    return command.replace(/\(\)/g,"o").replace(/\(al\)/g,"al")
};
//G -> G
//() -> o
//(al) -> al
//Gと)以外はスタックしていって)がきてpopした値が(ならo lならalと判別できるから返り値文字にくわえていけばいい
//そもそもreplaceで文字置き換えれば解決する