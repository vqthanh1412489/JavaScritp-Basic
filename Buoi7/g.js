// Các systax rút gọn trong ES6

// 1. Khai báo nhiều biến lấy các giá trị của một đối tượng:
    // Note: Tên biến phải giống tên của thuộc tính trong class.
const thanh = {
    name : 'thanh',
    age : 23,
    hobby : 'Film'
}

// const name = thanh.name;
// const age = thanh.age;
// const hobby = thanh.hobby;

// console.log(name, age, hobby);

  // Có thể dùng:
const {name, age, hobby} = thanh;
console.log(name, age, hobby);


// 2. Khởi tạo một đối tượng từ các thuộc tính
// Note: Các thuộc tính của đối tượng phải cùng tên với các biến tạo nên nó.

const name1 = 'Vu Quoc Thanh';
const age1 = 20;
const birthDay1 = '30/09/1995';

    //Tạo bình thường:
//     const thanh1 = {
//         name1 : name1,
//         age1 : age1,
//         birthDay1 : birthDay1
//     };
// console.log(thanh1);

    // Tạo rút gọn
    const thanh1 = {name1, age1, birthDay1};
    console.log(thanh1);