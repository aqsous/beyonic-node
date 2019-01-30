const request = require('request-promise')

class Contacts {

    auth

    constructor(auth) {
        this.auth = auth;
    }

    create = (firstName, lastName, phoneNumber, email, metadata) => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'POST',
            url: 'https://app.beyonic.com/api/contacts',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
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

    get = id => {
        if (!auth) {
            throw new Error("No Authorization was provided")
        }

        var options = {
            method: 'GET',
            url: 'https://app.beyonic.com/api/contacts/' + id,
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
            url: 'https://app.beyonic.com/api/contacts' ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        return await request(options);
    }
}

module.exports = Contacts