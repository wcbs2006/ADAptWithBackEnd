const express = require('express');
const exphbs = require('express-handlebars')

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3333, console.log("Hello, i'm online at 3333"));