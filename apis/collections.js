const request = require('request-promise')

class Collections {

    constructor(auth) {
        this.auth = auth;
    }
    
    async get(id) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/collections/' + id,
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
            url: 'https://app.beyonic.com/api/collections',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options)
    }
}

module.exports = Collections