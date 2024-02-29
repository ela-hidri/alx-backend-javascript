const request = require('request');
const { expect } = require('chai');

describe('API suite', () => {
  const API_URL = 'http://localhost:7865';

  it('Gshoud respond correct', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should respond for correct id type', (done) => {
    request.get(`${API_URL}/cart/2`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 2');
      done();
    });
  });

  it('should respond for negative id', (done) => {
    request.get(`${API_URL}/cart/-2`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should respond for wrong id type', (done) => {
    request.get(`${API_URL}/cart/2ff`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
