const expecting = require('chai').expect;
const { BaseElement } = require('../pageobjects/baseelements/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory')
const This = new PageFactory();


describe('Functionality check on search page', () => {
    it('Сheck search for text "javascript"', async () => {
        await This.page.open('https://oz.by/')
        await This.header.search('javascript');
        const searchResult = await I.getText(This.searchList.searchListItem); 
        expect(searchResult.toLowerCase()).toContain('javascript' );
    });
    it('Check sorted by rayting', async () => {
        const firstSorting = await I.getText(This.searchList.sorting);
        await This.searchList.sortingBy('Рейтинг');
        const secondSorting = await I.getText(This.searchList.sorting);
        expecting(firstSorting).to.not.equal(secondSorting);   
     });
    it('Filter search by price and check that the quantity of product has decreased', async () => {
       await This.searchList.filterByPrice(60, 80);
       const searchResult = await I.getText(This.searchList.searchListItem); 
       expect(searchResult.toLowerCase()).toContain('javascript' && '4');   
    });
    it('Check that first result from search list contain text "javascript"', async () => {
        const search = await I.getElementsArray(This.searchList.searchResults);
        await I.clickElementFromArray(search, 0);
        const productTitle = await I.getElementText(This.product.productTitle);
        expect(productTitle.toLowerCase()).toContain('javascript');   
    });
})