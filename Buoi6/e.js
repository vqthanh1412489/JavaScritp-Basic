// Tự viết hàm mySort để sắp xếp giảm dần, tăng dần...
const arrNum = [1, 3, 7, 8, 2, 10, 50, 24];

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'Ti', age: 14 },
    { name: 'Tun', age: 12 }
];

function mySort(a, checkFn){
    let arrNum = a;
    for (let i = 0; i < arrNum.length -1; i++){
        for (let j = i + 1; j < arrNum.length; j++){
            if (checkFn(arrNum[i], arrNum[j])){
                let tam = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = tam;
            }
        }
    }
    return arrNum;
}

// console.log(mySort(arrNum, (a, b) => a < b));
console.log(mySort(arrPerson, (a, b) => a.age > b.age));