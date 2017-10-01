const Tinh = require('./models/Tinh');
const tinh = require('./controllers/tinh');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3009);

app.get('/', (req, res) => {
    res.render('a');
});

app.get('/tinh/:so1/:so2/:operator', tinh);


