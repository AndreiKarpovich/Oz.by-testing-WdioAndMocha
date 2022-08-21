
const { BaseElement } = require('../pageobjects/baseelements/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();


describe('Login and functionality check on personal page', () => {
    it('Login on the page', async () => {
        await This.page.open('https://oz.by/');
        await I.clickElement(This.header.headerAuthButton);
        await I.clickElement(This.header.loginWithEmail);
        await This.loginPage.login('theoryyyy93@gmail.com', 'LB3RET')
        const username = await I.getText(This.header.userName); 
        expect(username).toEqual('oz18719318');    
    });
    it('Check username dropdown menu', async () => {
        await I.getDropDown(This.header.userName, This.header.dropDownMenu);
        const text = await I.getText(This.header.dropDownMenu);
        expect(text).toContain('Кешбэк' && 'Бонусный счёт'); 
    });
    it('Check highlighting of dropdown menu', async () => {
        const color = await I.getCSSProperty(This.header.dropDownOrders, 'color');
        expect(color.value).toEqual('rgba(2,51,154,1)'); 
    });
    it('Go to personal page and check number of purchases', async () => {
        await I.clickElement(This.header.userName);
        const numPurchases = await I.getText(This.personal.purchases); 
        expect(numPurchases).toEqual('0 покупок');  
    });
    it('Check my cash back', async () => {
        const account = await I.getText(This.personal.cashback); 
        expect(account).toEqual('Мой кешбэк — 5%');  
    });
    it('Check money in the account', async () => {
        const account = await I.getText(This.personal.personalAccount); 
        expect(account).toEqual('0,00 руб.');  
    });
    it('Сheck that the card is empty', async () => {
        await I.clickElement(This.personal.card);
        const myCard = await I.getText(This.card.layoutColumn); 
        expect(myCard).toContain('пусто');
    });
})