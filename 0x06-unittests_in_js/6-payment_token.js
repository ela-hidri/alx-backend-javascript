function  getPaymentTokenFromAPI(success) {
    if (success == true){
        return new Promise((resolve, reject) => {
            const responseData = {data: 'Successful response from the API' }
            resolve(responseData)
        })

    }
  }
module.exports = getPaymentTokenFromAPI
