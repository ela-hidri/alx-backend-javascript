const request = require('request');
const { expect } = require('chai');

describe('Api suite', () => {
  it('should respond with Welcome to the payment system', (done) => {

    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });

    it('GET /cart/:id returns correct response for valid :id', (done) => {
      request.get(`${API_URL}/cart/2`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 2');
        done();
      });
    });
  
    it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
      request.get(`${API_URL}/cart/hohoho`, (_err, res, _body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });

  });
});
});
