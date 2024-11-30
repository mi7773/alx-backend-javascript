const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse JSON request body
app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(404).end();
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
