const request = require('request-promise')

let Accounts = class  {

    constructor(auth) {
        this.auth = auth;
    }

    async get(id) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/accounts/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }

    async list() {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/accounts',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }
}

module.exports = Accounts;