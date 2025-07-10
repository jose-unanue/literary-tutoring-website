const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/support', (req, res) => {
  res.render('support');
});

app.get('/tutoring', (req, res) => {
  res.render('tutoring');
});

app.get('/updates', (req, res) => {
  res.render('updates');
});

app.get('/team', (req, res) => {
  res.render('team');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
