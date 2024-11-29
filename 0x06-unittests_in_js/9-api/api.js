const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartID = req.params.id;
  if (/^\d+$/.test(cartID)) {
    res.status(200).send(`Payment methods for cart ${cartID}`);
  } else {
    res.status(404).end();
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
