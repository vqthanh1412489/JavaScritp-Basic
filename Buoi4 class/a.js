// const per = {
//     name : 'Thanh',
//     age : 200,
//     birthday : '30/9/2000'
// }


// console.log('Name: ' + per.name + ' - Tuoi: ' + per.age + ' - Birhtday: ' + per.birthday);


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log(`Ban ten la: ${this.name}, Ban ${this.age} tuoi nhe!`);
    }
}

const thanh = new Person('Thanh', 1000);
thanh.hello();


