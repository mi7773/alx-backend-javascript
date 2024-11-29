const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', () => {
  describe('SUM', () => {    
    it('1 + 3 should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('1 + 3.7 should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('1.2 + 3.7 should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('1.5 + 3.7 should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('-1.5 + 3.7 should return 3', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, 3.7), 3);
    });

    it('0 + 3.7 should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 3.7), 4);
    });
  });

  describe('SUBTRACT', () => {    
    it('1.4 - 4.5 should return -4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('1 - 3.7 should return -3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('1.2 - 3.7 should return -3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('1.5 - 3.7 should return -2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('-1.5 - 3.7 should return -5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 3.7), -5);
    });

    it('0 - 3.7 should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 3.7), -4);
    });
  });

  describe('DIVIDE', () => {    
    it('6.2 - 2.9 should return 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.2, 2.9), 2);
    });

    it('1 / 1 should return 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 1), 1);
    });

    it('3.7 / 2.2 should return 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 2.2), 2);
    });

    it('1.5 / 0 should return "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });

    it('-2 / 1 should return -2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2, 1), -2);
    });

    it('0 / 3.7 should return 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
    });
  });
});
