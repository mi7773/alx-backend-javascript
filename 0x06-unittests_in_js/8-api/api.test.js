const app = require('./api');

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('should return a message with status 200', (done) => {
    request.get(
      {
        url: 'http://localhost:7865/',
        json: true
      },
      (err, res, body) => {
        if (err) return done(err);

        expect(res.statusCode).to.equal(200);
        expect(body.message).to.equal('Welcome to the payment system');
        done();
      }
    );
  });
});
