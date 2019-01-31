const request = require('request-promise')

class Payments {

    constructor(auth) {
        this.auth = auth;
    }

    async create(phoneNumber, firstName, lastName, currency, amount, account, description, callbackUrl, paymentType) {
        if(!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/payments/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
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

    async get(id) {
        if(!this.auth) {
            throw new Error("No Authorization was provided");
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/payments/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }

    async get() {
        if(!this.auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/payments',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }

}

module.exports = Payments;