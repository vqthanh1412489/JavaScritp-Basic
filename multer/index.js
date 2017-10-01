const express = require('express');
const reload = require('reload');
const upload = require('./upload').upload;
const fields = require('./upload').fields;


const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/result', upload.single('avatar'), (req, res) => {
    console.log(req.body);
    res.render('result');
});


reload(app);
app.listen(3009, () => console.log('Server Started'));