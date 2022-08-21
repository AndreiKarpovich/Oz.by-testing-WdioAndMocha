const {Page} = require('../pageobjects/page');
const { Header } = require('../pageobjects/pagecomponemts/header');
const { LoginPage } = require('../pageobjects/login.page');
const { Personal } = require('../pageobjects/personal.page');
const { Card } = require('../pageobjects/card.page');
const { SearchList } = require('../pageobjects/searchList.page');
const { Product } = require('../pageobjects/product.page');
const { MainPage } = require('../pageobjects/main.page');
const { Footer } = require('../pageobjects/pagecomponemts/footer');


class PageFactory {
    constructor() {
        this.page = new Page();
        this.header = new Header();
        this.loginPage = new LoginPage();
        this.searchList = new SearchList();
        this.personal = new Personal();
        this.card = new Card();
        this.product = new Product();
        this.mainPage = new MainPage();
        this.footer = new Footer();  
    }
}

module.exports = { PageFactory };
