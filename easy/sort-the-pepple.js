var sortPeople = function(names, h) {
    let arr = []
    
    for(let i=0;i<names.length;i++) {
      arr.push([names[i],h[i]])
    }
    arr.sort((a, b) => b[1] - a[1]);
    arr = arr.map((data)=>data[0])
      return arr
  };
//names = ["Mary","John","Emma"], heights = [180,165,170]
//背の順でnamesを返す
//nameとhの組み合わせを配列に入れる
//sortで各要素のindex1の内容元にソートする
//[ [ 'Mary', 180 ], [ 'Emma', 170 ], [ 'John', 165 ] ]
//よってheightで二次元配列ソートする
//ソートしたらmapでindex0 namesだけ取り出して返す