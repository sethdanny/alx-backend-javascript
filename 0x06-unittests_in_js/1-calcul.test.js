const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('type == "SUM" - equal positive numbers', () => {
    const result = calculateNumber('SUM', 2, 2);
    assert.strictEqual(result, 4);
  });

  it('type == "SUM" - equal positive numbers(alternate)', () => {
    const result = calculateNumber('SUM', 2.4, 2.6);
    assert.strictEqual(result, 5);
  });

  it('type == "SUM" - equal negative numbers', () => {
    const result = calculateNumber('SUM', -2, -2);
    assert.strictEqual(result, -4);
  });

  it('type == "SUM" - equal negative numbers(alternate)', () => {
    const result = calculateNumber('SUM', -2.4, -2.6);
    assert.strictEqual(result, -5);
  });
});
