// const a = {name : 'thanh'};
// const b = {name : 'thanh'};
// console.log(a === b);
// Khi truyền biến vô 1 function: 
//1> Nếu là kiểu nguyên thủy -> Truyền giá trị -> 0 ảnh hưởng đến đối tượng

let a = 'Vu Quoc Thanh';
function addString(str){
    str += ' Dong Phuong Bat Bai!';
}

addString(a);
console.log(a);
// Result: Vu Quoc Thanh => a khong thay doi gia tri

//2. Nếu là kiểu hôn hợp (obj) ->Truyền tham chiếu -> ảnh hưởng đến đối tượng
const thanh = {
    name : 'Thanh',
    age : 18,
}
function add(person){
    person.age += 1;
}
function addStringPlus(person){
    person.name += ' Dong Phuong Bat Bai!';
}

addStringPlus(thanh);
add(thanh);
console.log(thanh);

// Resutl: {name: 'Thanh Dong Phuong Bat Bai', age: 19}