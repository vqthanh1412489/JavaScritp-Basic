class Person {
    constructor(name, age){ // Hoặc có thế dùng: age = 10 luôn trên này nhé!
        this.name = name;
        this.age = age ? age : 10; // Nếu không truyền gì vào thì lấy 10t nè!
    }
    
    helloYou(){
        console.log(`Ban ten la: ${this.name}, Ban ${this.age} tuoi nhe!`);
    }
}

const thanh = new Person('Thanh', 1000);
thanh.helloYou();