// server.js (or index.js)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const shortid = require('shortid');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const urlDatabase = {};

app.post('/api/shorten', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortUrl = shortid.generate();
  urlDatabase[shortUrl] = url;

  res.json({ shortUrl: `http://localhost:5000/${shortUrl}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
