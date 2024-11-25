async function sleep(millis) {
    await new Promise((resolve => setTimeout(resolve,millis)))
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// millis文待機する
// settimeoutでmillis後にじっこう
// ただpromiseかえさない　awaitとおらない
// new Promiseつかってmillisあとにresolveやってpromiseかえす