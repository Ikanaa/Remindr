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
    res.render('home', {
        reminders: [
            {
                title: "Mon Titre",
                body: "le corp de mon rappel",
                creation: "25-12-2012",
                expiration: "30-12-2012",
                days: "5",
                author: "ikana",
                groupe: "groupe_ikana",
                color: "38, 0, 255"
            },
            {
                title: "Mon Titre 2",
                body: "le corp de mon rappel",
                creation: "25-12-2012",
                expiration: "30-12-2012",
                days: "5",
                author: "Tonic",
                groupe: "groupe_it",
                color: "38, 0, 20"
            }
        ]
    });
});

app.get('/new', (req, res) => {
     res.render('new_remind', {

     });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
