var flipAndInvertImage = function(image) {
    for(let i=0;i<image.length;i++) {
            image[i] = image[i].reverse()
            image[i] = image[i].map(data => 1-data)
    }
    return image
};
//水平反転
//各配列反転後に01反転する　反転はmap使えば良い
