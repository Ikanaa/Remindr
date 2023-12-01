express = require('express');
handlebars = require('express-handlebars');

const app = express();
const engine = handlebars.engine();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);