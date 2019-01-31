const request = require('request-promise')

class CollectionRequests {

    constructor(auth) {
        this.auth = auth;
    }

    async create(phoneNumber, currency, amount, metadata, sendInstructions) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/collectionrequests',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: {
                'phonenumber': phoneNumber,
                'currency': currency,
                'amount': amount,
                'metadata': metadata,
                'send_instructions': sendInstructions
            }
        }
        return await request(options)
    }

    async get(id) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/collectionsrequests/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options)
    }
    
    async list() {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/collectionsrequests',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options)
    }

}

module.exports = CollectionRequests