const express = require('express');
const app = express();
const port = 5000;

const { readFileSync } = require('fs');
const homePage = readFileSync('./app/index.html');
const homeStyles = readFileSync('./styles/css/styles.css');
const homeScript = readFileSync('./app/browser-app.js');

app.get('/', (req, res) => {
  console.log('User hit resource');
  res.writeHead(200, { 'content-type': 'text/html' });
  res.status(200).write(homePage);
  res.end();
});

app.get('/styles/css/styles.css', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/css' });
  res.write(homeStyles);
  res.end();
});

app.get('/app/brower-app.js', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/js' });
  res.write(homeScript);
  res.end();
});

app.all('*', (req, res) => {
  console.log(req.url);
  res.status(404).send('<h1>RESOURCE NOT FOUND</h1>');
});

app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
