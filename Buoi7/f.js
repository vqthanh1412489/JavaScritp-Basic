class Person {
    constructor(name, age, height){
        this.name = name;
        this.setAge = (newAge) => { // Qui định tuổi nhập vào phải > 0
            if (newAge < 0)
            throw new Error('Age > 0');
            age = newAge;
        };
        this.getAge = () => age;

        this.setHeight = (newHeigth) => { // Qui định chiều cao nhập vào phải > 50
            if (newHeigth < 0)
            throw new Error('Height > 50');
            height = newHeigth;
        };
        this.getHeight = () => height;
    }
}

let thanh = new Person('Vu Quoc Thanh', 10, 100);
thanh.setAge(25);
thanh.setHeight(200);
console.log(thanh.getAge()); 
console.log(thanh.getHeight()); 
console.log(thanh);