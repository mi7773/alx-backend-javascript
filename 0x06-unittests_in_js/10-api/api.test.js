const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('Should return a message with status 200', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Should return a message with status 200', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Status should be 200', (done) => {
    request.get('http://localhost:7865/cart/hello', (_, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('Should return an object with status 200', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('Should return a message with status 200', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {
        userName: 'Betty'
      }
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
