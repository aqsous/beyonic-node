const request = require('request-promise')

class Webhooks {

    constructor(auth) {
        this.auth = auth;
    }

    async create(event, target){
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/webhooks',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: {
                'event': event,
                'target': target
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
            url: 'https://app.beyonic.com/api/webhooks/' + id,
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
            url: 'https://app.beyonic.com/api/webhooks',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }

    async update(id, event, target){
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'PUT',
            url: 'https://app.beyonic.com/api/webhooks/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: {
                'event': event,
                'target': target
            }
        }
        return await request(options)
    }

    async delete(id) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'DELETE',
            url: 'https://app.beyonic.com/api/webhooks/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options)
    }
}

module.exports = Webhooks;