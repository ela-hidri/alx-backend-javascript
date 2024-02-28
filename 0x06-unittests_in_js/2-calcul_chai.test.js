expect = require('chai').expect;
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber function', function() {
    it('should return the sum of two numbers', function(){
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    })

    it('should return the division of two numbers', function(){
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })

    it('should return the sub of two numbers', function(){
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })

    it('should return Error if division by 0', function(){
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    })

})
