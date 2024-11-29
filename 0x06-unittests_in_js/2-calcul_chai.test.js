const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('CalculateNumber', () => {
  describe('SUM', () => {    
    it('1 + 3 should return 4', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('1 + 3.7 should return 5', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('1.2 + 3.7 should return 5', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('1.5 + 3.7 should return 6', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('-1.5 + 3.7 should return 3', () => {
      expect(calculateNumber('SUM', -1.5, 3.7)).to.equal(3);
    });

    it('0 + 3.7 should return 4', () => {
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {    
    it('1.4 - 4.5 should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('1 - 3.7 should return -3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('1.2 - 3.7 should return -3', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('1.5 - 3.7 should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('-1.5 - 3.7 should return -5', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.equal(-5);
    });

    it('0 - 3.7 should return 4', () => {
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {    
    it('6.2 - 2.9 should return 2', () => {
      expect(calculateNumber('DIVIDE', 6.2, 2.9)).to.equal(2);
    });

    it('1 / 1 should return 1', () => {
      expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    });

    it('3.7 / 2.2 should return 2', () => {
      expect(calculateNumber('DIVIDE', 3.7, 2.2)).to.equal(2);
    });

    it('1.5 / 0 should return "Error"', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });

    it('-2 / 1 should return -2', () => {
      expect(calculateNumber('DIVIDE', -2, 1)).to.equal(-2);
    });

    it('0 / 3.7 should return 0', () => {
      expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    });
  });
});
