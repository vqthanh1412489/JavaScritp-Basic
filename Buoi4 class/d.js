class Company {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Person {
    constructor(name, age, company){ // Hoặc có thế dùng: age = 10 luôn trên này nhé!
        this.name = name;
        this.age = age; // Nếu không truyền gì vào thì lấy 10t nè!
        this.company = company;
    }
    
    helloYou(){
        console.log(`Ban ten la: ${this.name}, Ban ${this.age} tuoi nhe!`);
    }
}

const ct = new Company('Hcmus', 'Vung');
console.log(ct.name);
const per = new Person('Thanh', 1000, ct.address);