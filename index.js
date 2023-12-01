const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const router = express.Router({ mergeParams: true });
const port = 3010;

const engine = handlebars.create();

app.engine('handlebars', engine.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
