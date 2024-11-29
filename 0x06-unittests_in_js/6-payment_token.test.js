const { assert } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Should return true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.strictEqual(result, {data: 'Successful response from the API' });
      });
    done();
  })
})
