const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

assert.strictEqual(calculateNumber(1, 3), 4, 'erro')
assert.strictEqual(calculateNumber(1, 3.7), 5, 'erro')
assert.strictEqual(calculateNumber(1, 3.4), 4, 'erro')
assert.strictEqual(calculateNumber(1.3, 3), 4, 'erro')
assert.strictEqual(calculateNumber(1.5, 3), 5, 'erro')
assert.strictEqual(calculateNumber(1.2, 3.1), 4, 'erro')
assert.strictEqual(calculateNumber(1.5, 3.5), 6, 'erro')
assert.strictEqual(calculateNumber(1.2, 3.5), 5, 'erro')
assert.strictEqual(calculateNumber(1.7, 3.1), 5, 'erro')
