const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT
const app = express()

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jose',
    title: 'Curso Node'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Jose',
    title: 'Curso Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Jose',
    title: 'Curso Node'
  })
});



app.listen(port);
