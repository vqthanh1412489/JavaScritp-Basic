const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    {name: 'Teo', age : 10},
    {name: 'Ti', age : 12},
    {name: 'Tun', age : 14},
];

function getArrName(arr){
    const b = [];
    for (let index in arr){
        b.push(arr[index].name);
    }
    return b;
}

function getArrAge(arr){
    const b = [];
    for (let index in arr){
        b.push(arr[index].age);
    }
    return b;
}

function getSqr(arr){
    const b = [];
    for (let index in arr){
        b.push(arr[index] * arr[index]);
    }
    return b;
}

// Hàm map tự viết
function map(arr, fn){
    const b = [];
    for (let index in arr){
        b.push(fn(arr[index]));
    }
    return b;
}

console.log(map(arrNum, a => a * a));
console.log(map(arrPerson, mangA => mangA.name));
console.log(map(arrPerson, mangA => mangA.age));