const sinon = require('sinon');
const assert = require('assert');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Should call calculateNumber with "SUM", 100, and 20', () => {
    const spy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledWith('SUM', 100, 20));
    assert(spy.calledWith('The total is: 10'));
    calculateNumberStub.restore();
    spy.restore();
  });
});
