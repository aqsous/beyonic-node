const request = require('request-promise')

class Accounts {
    auth

    constructor(auth) {
        this.auth = auth;
    }

    get = async id => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/accounts/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options);
    }

    list = () => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }
    
        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/accounts',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options);
    }
}

module.exports = Accounts;