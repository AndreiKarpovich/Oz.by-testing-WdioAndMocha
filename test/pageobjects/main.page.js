const {Page} = require('./page');

class MainPage extends Page {
    constructor() {
        super();
        this.shops  = '.main-nav__list__ul_last .main-nav__list__item.menu-link-action.main-nav__list__item_spec';
        this.mapPopupShops = '#navigationMap .b-map__popup .b-map__cell.b-map__cell_menu';
        this.mapPopupTitle = '#navigationMap .b-map-select__title';
        this.upButton = '.up-btn.up-btn_visible';
    };    
}

module.exports = { MainPage };