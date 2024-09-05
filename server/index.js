/** FEEDBACK: Great job! You can also try experimenting with queries and try to deploy using render! 
 * Besides that, you did a great job here with your endpoints and separate callback functions!
 */
const express = require('express');
const app = express();

// CONTROLLERS 
const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');g
}
const serveIntro = (req, res, next) => {
  res.send('<h1>Intro</h1>');
}
const serveGreeting = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`Salutations ${name}!`);
}
const serveData = (req, res, next) => {
  const data = [{ subject: 'software engineering' }, { subject: 'math' }, { name: 'science' }];
  res.send(data);
}

// ENDPOINTS 
app.get('/', serveIndex);
app.get('/intro', serveIntro);
app.get('/api/greeting', serveGreeting);
app.get('/api/data', serveData);

const PORT = 8080;
app.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`) });