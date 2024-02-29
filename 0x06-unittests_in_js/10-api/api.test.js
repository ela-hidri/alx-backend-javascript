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
    request.get(`${API_URL}/cart/23`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 23');
      done();
    });
  });

  it('should respond for negative id', (done) => {
    request.get(`${API_URL}/cart/-5`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should respond for wrong id type', (done) => {
    request.get(`${API_URL}/cart/25lo5k`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('should returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'elaa'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome elaa');
      done();
    });
  });

  it('should returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
  
});