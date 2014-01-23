/* global describe, it */

var arity  = require('./');
var assert = require('assert');

/**
 * Example function.
 */
var fn = function () { return arguments; };

describe('arity', function () {
  it('should set the function length', function () {
    assert.equal(arity(0, fn).length, 0);
    assert.equal(arity(1, fn).length, 1);
    assert.equal(arity(2, fn).length, 2);
    assert.equal(arity(3, fn).length, 3);
    assert.equal(arity(4, fn).length, 4);
    assert.equal(arity(5, fn).length, 5);
    assert.equal(arity(6, fn).length, 6);
    assert.equal(arity(7, fn).length, 7);
    assert.equal(arity(8, fn).length, 8);
    assert.equal(arity(9, fn).length, 9);
  });

  it('should reuse interally generated functions', function () {
    assert.equal(arity(0, fn).length, 0);
    assert.equal(arity(1, fn).length, 1);
    assert.equal(arity(2, fn).length, 2);
    assert.equal(arity(3, fn).length, 3);
    assert.equal(arity(4, fn).length, 4);
    assert.equal(arity(5, fn).length, 5);
    assert.equal(arity(6, fn).length, 6);
    assert.equal(arity(7, fn).length, 7);
    assert.equal(arity(8, fn).length, 8);
    assert.equal(arity(9, fn).length, 9);
  });

  it('should proxy function arguments', function () {
    assert.equal(arity(0, fn)('a', 'b', 'c')[1], 'b');
  });
});
