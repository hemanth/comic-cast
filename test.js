'use strict';
var assert = require('assert');
var comicCast = require('./');

it('should export a function', function () {
  assert.strictEqual(typeof comicCast, 'function');
});
