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
