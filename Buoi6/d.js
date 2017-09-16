
const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    {name: 'Teo', age : 10},
    {name: 'Ti', age : 12},
    {name: 'Tun', age : 14},
];

// forEach(): Voi mỗi phần tử thì làm gì theo 1 function nào đó. Khác với map() là nó không tạo ra một mảng mới
// forEach(value1, value2, value3): Nhận vào 3 tham số: 1: giá trị của từng phần tử, 2: index của các phần từ
// arrNum.forEach(e => console.log(e));

console.log(arrPerson.sort((a, b) => b.age - a.age));