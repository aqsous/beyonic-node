const Accounts = require('./apis/accounts.js')
const Contacts = require('./apis/contacts.js')
const Collections = require('./apis/collections')
const CollectionRequests = require('./apis/collection_requests')
const Payments = require('./apis/payments')
const Webhooks = require('./apis/webhooks')


class Beyonic {

    constructor(apiKey) {
        if (apiKey){
            this._auth = "Token " + apiKey;
        }
        this.accounts = new Accounts(this._auth);
        this.contacts = new Contacts(this._auth);
        this.collections = new Collections(this._auth)
        this.collectionRequests = new CollectionRequests(this._auth)
        this.payments = new Payments(this._auth)
        this.webhooks = new Webhooks(this._auth)
    }

}
module.exports = Beyonic