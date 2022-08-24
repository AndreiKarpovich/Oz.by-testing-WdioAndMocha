const {Page} = require('./page');

class SearchList extends Page {
    constructor() {
        super();
        this.searchListItem = '.breadcrumbs__list__li.active ';
        this.searchResults = '.viewer-type-card__li';
        this.filterSearchByPriceStart = '#inp1_r_cost';
        this.filterSearchByPriceFinish = '#inp2_r_cost';
        this.filterButtom = '.filters__searchbtn__btn';
        this.sorting = '.top-filters__eselect.top-filters__eselect_alltypes';
        this.sortingAll = '.top-filters__eselect.top-filters__eselect_alltypes .filters__chkslist__li ';
    };

    async filterByPrice(start, finish) {
        await $(this.filterSearchByPriceStart).setValue(start);
        await $(this.filterSearchByPriceFinish).setValue(finish);
        await $(this.filterButtom).click();
    };
    async sortingBy(string) {
        await $(this.sorting).waitForClickable();
        await $(this.sorting).click();
        if (string === 'Релевантность') {
            $$(this.sortingAll)[0].click();      
        } else if (string === 'Популярность') {
            $$(this.sortingAll)[1].click();    
        } else if (string === 'Дата поступления') {
            $$(this.sortingAll)[2].click();    
        } else if (string === 'Сначало дешевые') {
            $$(this.sortingAll)[3].click();    
        } else if (string === 'Сначало дорогие') {
            $$(this.sortingAll)[4].click();    
        } else if (string === 'Рейтинг') {
            $$(this.sortingAll)[5].click();    
        } else if (string === 'Алфавит') {
            $$(this.sortingAll)[6].click();
        };
        await $(this.sorting).waitForClickable();
    }
}



module.exports =  { SearchList };