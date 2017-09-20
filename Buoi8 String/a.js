const vnexpress = require('./vnexpress.js');
const New = require('./News.js');
// const getBody = require('./getBody.js').getBody;
// const getNews = require('./getBody.js').getNews;

const {getBody, getNews} =  require('./getBody.js');

const arrayItem = vnexpress.split('<item>');

arrayItem.shift();

let arrayNews = [];

for (let item in arrayItem){
    const news = getNews(arrayItem[item]);
    arrayNews.push(news);
}

console.log(arrayNews[5]);
console.log(arrayNews.length);


