const express = require('express');
const app = express();

const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
}
const serveTitle = (req, res, next) => {
  res.send('<h1>Title Here</h1>');
}
const serveGreeting = (req, res, next) => {
  res.send('Salutations!');
}
const serveData = (req, res, next) => {
  const data = [{ subject: 'software engineering' }, { subject: 'math' }, { name: 'science' }];
  res.send(data);
}

app.get('/', serveIndex);
app.get('/title', serveTitle);
app.get('/api/greeting', serveGreeting);
app.get('/api/data', serveData);

const PORT = 8080;
app.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`) });