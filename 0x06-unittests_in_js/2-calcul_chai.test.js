expect = require('chai').expect;
const calculateNumber = require("./1-calcul.js");

expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
