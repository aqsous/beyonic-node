const request = require('request-promise')

class CollectionRequests {

    auth

    constructor(auth) {
        this.auth = auth;
    }

    create = (phoneNumber, currency, amount, metadata, sendInstructions) => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/collectionrequests',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
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

    get = id => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/collectionsrequests' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options)
    }
    

    get = () => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/collectionsrequests',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options)
    }

}

module.exports = CollectionRequests