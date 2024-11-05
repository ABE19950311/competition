var canBeTypedWords = function(text, brokenLetters) {
    let count = 0
    let letter = brokenLetters.split("")
    let arr = text.split(" ")

    for(let i=0;i<arr.length;i++) {
        let flag = true

        for(let j=0;j<letter.length;j++) {
            if(arr[i].indexOf(letter[j])!=-1) {
                flag = false
                break
            }
        }

        if(flag) {
            count++
        }
    }

    return count
};
//brokenLettersふくまないtextの数返す
//indexofで探して存在してたらflagfalseにする
//loopowatte true no mama nara count suru