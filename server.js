const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalLetters', (text) => {
  return text.toUpperCase();
});

app.get('/about',(req,res) => {
  res.render('about.hbs', {
      pageTitle: 'About Page'
  });
});

app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle: 'Home Page'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});