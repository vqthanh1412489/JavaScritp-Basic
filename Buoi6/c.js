
const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    {name: 'Teo', age : 10},
    {name: 'Ti', age : 12},
    {name: 'Tun', age : 14},
];

// Tinh tong tuoi cua cac phan tu:
const arr = arrPerson.map(a => a.age);
console.log(arrPerson.reduce(function(a, b){
    return arr.reduce((x, y) => x + y);
}));
// Dùng indexOf() : Khi kiểu dữ liệu là nguyên thủy
// Dùng find(), findIndex() : Khi kiểu dữ liệu là hỗn hợp
