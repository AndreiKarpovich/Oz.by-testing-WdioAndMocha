const {Page} = require('./page');

class Card extends Page {
    constructor() {
        super();
        this.layoutColumn  = '.i-layout-column';  
    };
}    

module.exports = { Card }; 