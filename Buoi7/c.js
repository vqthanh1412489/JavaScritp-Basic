class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static showInfor() {
        console.log(`Tao ten la ${this.name}, Tao ${this.age} tuoi nha!`);
    }

}

let thanh = new Person('Vu Quoc Thanh', 20);
Person.showInfor(thanh);
// Static function: Truy cập trực tiếp vào Class không cần tạo obj
// Vd như: Math.sqrt()
// Nhằm gom phương thức lại trong Class
// This trong static là this của Class. Nó có thuộc tính name. vd: Person.name = Person


