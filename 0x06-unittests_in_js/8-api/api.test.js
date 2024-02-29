const request = require('request');
const { expect } = require('chai');

describe('Api suite', () => {
  it('should respond with Welcome to the payment system', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
