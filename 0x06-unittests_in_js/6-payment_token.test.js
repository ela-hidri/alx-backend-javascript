const { expect } = require("chai")
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function() {
    it('should test a resolved promise', function(done) { 
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result).to.eql({data: 'Successful response from the API' }); 
            done(); 
        }).catch((error) => {
            done.fail(error); 
        });
    });
});
