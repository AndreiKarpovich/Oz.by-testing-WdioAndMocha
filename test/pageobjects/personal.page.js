const {Page} = require('./page');

class Personal extends Page {
    constructor() {
        super();
        this.purchases = '.uc-purchase';
        this.personalAccount = '.uc-nav.uc-nav-last [href="/personal/account.phtml"]+sup';
        this.cashback = '.uc-allprops';
        this.card = '.uc-nav [href="/checkout/"]';
    };      
}

module.exports =  { Personal };
