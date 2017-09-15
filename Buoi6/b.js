const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    {name: 'Teo', age : 10},
    {name: 'Ti', age : 12},
    {name: 'Tun', age : 14},
];

console.log(arrNum.map(a => a * 2));
console.log(arrPerson.map(person => person.name));
console.log(arrPerson.map(person => person.age));

console.log(arrNum); // Không làm thay đổi giá trị của mảng gốc 
