const dantri = require('./dantri.js');

const New = require('./News.js');

const {getBody, getNewsDanTri} =  require('./getBody.js');

const arrayItem = dantri.split('<item>');

arrayItem.shift();

let arrayNews = [];

for (let item in arrayItem){
    const news = getNewsDanTri(arrayItem[item]);
    arrayNews.push(news);
}

console.log(arrayNews[1]);
console.log(arrayNews.length);