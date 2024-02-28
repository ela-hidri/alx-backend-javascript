const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6, 'failed')
assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4, 'failed')
assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2, 'failed')
assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error', 'failed')
assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error', 'failed')
assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 1.7), 3, 'failed')

