const sinon = require('sinon');
const assert = require('assert');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Should call calculateNumber with "SUM", 100, and 20', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledWith('SUM', 100, 20));
    spy.restore();
  });
});
