const sinon = require('sinon');
const assert = require('assert');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('console is only called once and logging the string "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledWith('The total is: 120'));
    assert.strictEqual(spy.callCount, 1);
  });

  it('console is only called once and logging the string "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);
    assert(spy.calledWith('The total is: 20'));
    assert.strictEqual(spy.callCount, 1);
  });
});
