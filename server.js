const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

//Acces partials to avoid code repition using templating engine.
hbs.registerPartials(__dirname + '/views/partials');

//Set the format of the templating engine(handlebars).
app.set('view engine', 'hbs');

//Acces static files like html and css documents.
app.use(express.static(__dirname + '/public'));

//Use helper functions to avoid repetition with handlebars
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalLetters', (text) => {
  return text.toUpperCase();
});

//Use handlebars in a dynamic way with render method adding an object with properties
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

//Call listen method to send a response to the browser and see the content in the port specified
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});