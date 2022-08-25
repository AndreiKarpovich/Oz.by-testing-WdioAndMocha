const { BaseElement } = require('../pageobjects/baseelements/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();


describe('Functionality check on product page', () => {
    it('Check that title text contain product name ', async () => {
        await This.page.open('https://oz.by/');
        await I.clickElement(This.header.headerAuthButton);
        await I.clickElement(This.header.loginWithEmail);
        await This.loginPage.login('theoryyyy93@gmail.com', 'LB3RET');
        await This.header.search('JavaScript с нуля');
        const title = await I.getTitle();
        const productName = await I.getElementText(This.product.productName);
        expect(title).toContain(productName);
    });
    it('Check that comment form  shoud be visible after click AddCommentButton', async () => {
        await I.clickElement(This.product.addCommentButton);
        await expect($(This.product.commentContainer).is(':visible'));
    });
    it('Add product to card and check that the cart is not empty', async () => {
        await This.product.addProductToCard();
        const text = await I.getElementText(This.product.afterAddButton);
        expect(text).toContain('в корзине');
    });
    it('Check that all product comments have a date', async () => {
        const comments = await I.getElementsArray(This.product.comments);
        const commentsDate  = await I.getElementsArray(This.product.commentsDate);
        await expect(comments).toHaveChildren(commentsDate);
    });  
})