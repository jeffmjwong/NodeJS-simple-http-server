const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('<h1>Home page!</h1>'));
app.get('/hello', (req, res) => res.send('<h1>Hello world!</h1>'));
app.get('/test', (req, res) => res.sendFile('public/test.html', { root: __dirname }));

app.get('/hello/:name', (req, res) => {
  res.send(`<h2>Hello, ${req.params.name}!!</h2>`);
});

app.post('/hello', (req, res) => res.send('You posted to Hello'));

app.listen(4321, () => {
  console.log('Express is listening at localhost:4321');
});
