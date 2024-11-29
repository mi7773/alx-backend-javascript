const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('CalculateNumber', () => {
  it('1 + 3 should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('1 + 3.7 should return 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('1.2 + 3.7 should return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('1.5 + 3.7 should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('-1.5 + 3.7 should return 3', () => {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });

  it('0 + 3.7 should return 4', () => {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
  });

  it('0 + 3.2 should return 3', () => {
    assert.strictEqual(calculateNumber(0, 3.2), 3);
  });
});
