
const { BaseElement } = require('../pageobjects/baseelements/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();


describe('Functionality check on main page', () => {
    it('Navigate and chech that page title should be contain OZ.by', async () => {
        await This.page.open('https://oz.by/');
        const title = await I.getTitle();
        expect(title).toContain('OZ.by');    
    });
    it('Check highlighting of card', async () => {
        const color = await I.getCSSProperty(This.header.card, 'color');
        expect(color.value).toEqual('rgba(205,69,0,1)'); 
    });
    it('Check shops dropdown menu', async () => {
        await I.getDropDown(This.mainPage.shops, This.mainPage.mapPopupShops);
        const text = await I.getText(This.mainPage.mapPopupShops);
        expect(text).toContain('Минск'); 
    });
    it('Check UpButton', async () => {
        await I.scrollTo(This.mainPage.upButton);
        await I.clickElement(This.mainPage.upButton);
        await expect($(This.header.logo).is(':visible')); 
    });
    it('Go to TikTok page and check link', async () => {
        await I.scrollTo(This.footer.socialLinks);
        await This.footer.goToSocialLinks('tiktok');
        const url = await browser.getUrl();  
        expect(url).toContain('tiktok')
    });
})