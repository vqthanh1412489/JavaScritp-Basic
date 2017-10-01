const Tinh = require('./models/Tinh');
const tinhController = require('./controllers/Tinh');


const express = require('express');
const app = express();

// npm install ejs /: Cai them cai nay
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
    // res.send('<b>Thanh</b>');
    res
});

app.get('/about', (req, res) => {
    res.send('T la Vu Thanh');
});

app.get('/:name/:age', (req, res) => {
   const {name, age} =  req.params;
   res.send(`Name: ${name}, Age : ${age}`);
});

app.get('/tinh/:soA/:soB/:tenPhepTinh', tinhController);
app.listen(3009);


