const request = require('request-promise')

class Payments {

    auth

    constructor(auth) {
        this.auth = auth;
    }

    create = (phoneNumber, firstName, lastName, currency, amount, account, description, callbackUrl, paymentType) => {
        if(!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/payments/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            },
            json: {
                'phonenumber': phoneNumber,
                'first_name': firstName,
                'last_name': lastName,
                'currency': currency,
                'account': account,
                'amount': amount,
                'description': description,
                'callback_url': callbackUrl,
                'payment_type': paymentType
            }
        }
        return await request(options);
    }

    get = id => {
        if(!auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/payments/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options);
    }

    get = () => {
        if(!auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/payments',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options);
    }

}

module.exports = Payments;