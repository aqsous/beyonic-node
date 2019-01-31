var Beyonic = require('./beyonic.js')

var beyonic = new Beyonic('ab594c14986612f6167a975e1c369e71edab6900');
beyonic.accounts.get(48).then(account => {
    console.log('account', account)
}).catch(error => {
    console.log('error', error)
});