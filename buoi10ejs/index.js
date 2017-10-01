const express = require('express');
const reload = require('reload'); // add thư viện reload
const app = express();


// Set up
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public')); // Đặt thư mục mặc định cho các file ở phía client (.css, .js, img...)

// Route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/a/b', (req, res) => { // Thêm đường dẫn khiến cho img không còn đọc được nữa
    res.render('ab');
});

app.get('/params', (req, res) => {
    res.render('param', {arrPerson});
});


reload(app); // Tự động reload lại app

app.listen(3009, () => console.log('Server start'));

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const arrPerson = [
    new Person('Ti', 10),
    new Person('Teo', 15),
    new Person('Tun', 20)
];
