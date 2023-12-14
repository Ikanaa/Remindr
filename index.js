//TODO Bcrypt pour le cryptage

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
var session = require('express-session')

const app = express();
const router = express.Router({ mergeParams: true });
const port = 3010;

//app.set('trust proxy', 1) // trust first proxy ||  Used with secure : true
app.use(session({
  secret: 'Ikana Tonic',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    //necessite httpS    
    secure: false 
}
}))


const engine = handlebars.create();

// For POST
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', engine.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('static'));

app.get('/', (req, res) => {

    console.log(req.session.id_user);

    if (!req.session.id_user)
    {
        res.redirect('/login');
        return;
    }


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
                color: "#000000",
                invcolor : invertColor("#000000"),
            },
            {
                title: "Mon Titre 2",
                body: "le corp de mon rappel",
                creation: "25-12-2012",
                expiration: "30-12-2012",
                days: "5",
                author: "Tonic",
                groupe: "groupe_it",
                color: "#f5c211",
                invcolor : invertColor("#f5c211"),
            }
        ]
    });
});

app.get('/new', (req, res) => {
    if (!req.session.id_user)
    {
        res.redirect('/login');
        return;
    }
     res.render('new_remind', {
	groups: [
	  {name: "groupe A"},
	  {name: "groupe B"}
	]
     });
});

app.post('/new', (req, res) => {
    console.log('Got body:', req.body);
    res.redirect("/");
});

app.get('/account', (req, res) => {
    if (!req.session.id_user)
    {
        res.redirect('/');
        return;
    }

    res.render('account', {
        login : "MONNOMSUPERCOOL"
    })
});

app.post('/logout', (req, res) => {
    req.session.regenerate(function (err) {
  
        if (err) next(err)
    
        req.session.id_user = null


        req.session.save(function (err) {
          if (err) return next(err)
          res.redirect('/')
        })
      })
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    if (req.session.id_user)
    {
        res.redirect('/');
        return;
    }

    req.session.regenerate(function (err) {
  
        if (err) next(err)
    
        // GO GET THE USER ID
        req.session.id_user = 1


        req.session.save(function (err) {
          if (err) return next(err)
          res.redirect('/')
        })
      })
});

app.post('/register', (req, res) => {
    if (req.session.id_user)
    {
        res.redirect('/');
        return;
    }

    if (req.body.password != req.body.repassword)
    {
        res.redirect('/login');
        return;
    }

    req.session.regenerate(function (err) {
  
        if (err) next(err)
    
        // GO GET THE USER ID
        req.session.id_user = 1


        req.session.save(function (err) {
          if (err) return next(err)
          res.redirect('/')
        })
      })
});


app.get("/groups", (req,res) => {
    
    if (!req.session.id_user)
    {
        res.redirect('/');
        return;
    }

    res.render("groups", {
        groups : [
            {
                group_name : "Yes Groupe",
                members : [
                    {
                        member_name : "Kackie"
                    },
                    {
                        member_name : "Jack"
                    },
                    {
                        member_name : "Steph"
                    }
                ]
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});





function invertColor(color) {
    // Récupérer les valeurs RGB de la couleur
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    // Inverser les valeurs RGB
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convertir les valeurs inversées en format hexadécimal
    let invertedColor = "#" 
                            + r.toString(16).padStart(2, '0') 
                            + g.toString(16).padStart(2, '0') 
                            + b.toString(16).padStart(2, '0');

    return invertedColor;
}