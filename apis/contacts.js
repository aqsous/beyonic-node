const request = require('request-promise')

class Contacts {

    constructor(auth) {
        this.auth = auth;
    }

    async create(firstName, lastName, phoneNumber, email, metadata) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/contacts',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: {
                'first_name': firstName,
                'last_name': lastName,
                'phone_number': phoneNumber,
                'email': email,
                'metadata': metadata
            }
        }
        return await request(options);
    }

    async get(id) {
        if (!this.auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/contacts/' + id,
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
            url: 'https://app.beyonic.com/api/contacts',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth
            },
            json: true
        }
        return await request(options);
    }
}

module.exports = Contacts