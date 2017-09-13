const arrSub = ['NodeJS', 'ReactJS', 'Javascript', 'Angular'];

// arrSub.push('Thanh');
// arrSub.pop();
// arrSub.shift();
// arrSub.unshift('Hihi');
arrSub.splice(1, 2);
console.log(arrSub.indexOf('NodeJS'));
//console.log(arrSub[2]); // Nếu truyền vô index > length thì ra undefine.
// Khi tiếp tục truy cập vào Undefine thì sẽ có lỗi

