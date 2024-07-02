// index.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const url = `https://google.com${req.url}`;
  axios.get(url)
   .then(response => {
      res.header('Content-Type', response.headers['content-type']);
      res.send(response.data);
    })
   .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching page');
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server listening on port 3000');
});
