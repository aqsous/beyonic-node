var Beyonic = require('./beyonic.js')

async function test(params) {
    var beyonic = new Beyonic('ab594c14986612f6167a975e1c369e71edab6900');
    account = await beyonic.accounts.get(48);
    console.log(account.id)
    // beyonic.payments.list()
    // beyonic.contacts.list()
    // beyonic.collection_requests.list()
}