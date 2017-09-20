const New = require('./News.js');
function getBody(str, start, end){
    const startIndex = str.indexOf(start) + start.length;
    const endIndex = str.indexOf(end);
    return str.slice(startIndex, endIndex);
}

function getNews(itemNews){
    const _title = getBody(itemNews, '<title>', '</title>');
    const _image = getBody(itemNews, 'src="', '></a></br>');
    const _link = getBody(itemNews, '<link>', '</link>');
    const _description = getBody(itemNews, '></a></br>', ']]>');

    const arrLinks = _link.split('-');
    const _id = arrLinks[arrLinks.length - 1].substr(0, 7);

    return new New(_id, _title, _description, _link, _image);
}

function getNewsDanTri(itemNews){
    const _title = getBody(itemNews, '<title><![CDATA[', ']]></title>');
    const _image = getBody(itemNews, '<img src="', '/></a>]]');
    const _link = getBody(itemNews, '<link><![CDATA[', ']]></link>');
    const _description = getBody(itemNews, '></a></br>', ']]>');

    const arrLinks = _link.split('-');
    const itemLast = arrLinks[arrLinks.length - 1];
    const _id = itemLast.slice(0, itemLast.length - 4); 

    return new New(_id, _title, _description, _link, _image);
}

module.exports = {getBody, getNews, getNewsDanTri};