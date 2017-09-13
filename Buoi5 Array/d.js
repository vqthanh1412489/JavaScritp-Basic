class Person {
    constructor(name, age, hight){
        this.name = name;
        this.age = age;
        this.hight = hight;
    }
}

const arrayPerson = [
    new Person('Thanh', 22, 165),
    new Person('Thang', 30, 195),
    new Person('Nhi', 17, 200),
    new Person('Chau', 25, 100),
];

function filterAge(arr){
    const arrayResult = []; // Nếu const của kiểu dữ liệu hỗn hợp (array, obj) thì có thể thay đổi giá trị.
    // Nếu const của kiểu dữ liệu nguyên thủy thì không thể thay đổi nhưng có thẻ gán.
    for (let item in arr){
        if (arr[item].age > 18)
            arrayResult.push(arr[item]);
    }
    return arrayResult;
}

function filterHeight(arr){
    const arrayResult = [];
    for (let item in arr){
        if (arr[item].hight > 160)
            arrayResult.push(arr[item]);
    }
    return arrayResult;
}

// Viết hàm bao quát tất cả các trường hợp:
 function myFilter(array, typeCheck){
    const arrayResult = [];
    for (let item in array){
        if (typeCheck(array[item]))
            arrayResult.push(array[item]);
    }
    return arrayResult;
 }
console.log(filterAge(arrayPerson));
console.log(filterHeight(arrayPerson));

// check age > 18
console.log(myFilter(arrayPerson, person => person.age > 18));
// Note: myFilter(arrayPerson, person => person.age > 18) : is Object
// check height > 160
console.log(myFilter(arrayPerson, person => person.hight > 160));