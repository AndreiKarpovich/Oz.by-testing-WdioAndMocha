const {Page} = require('../page');

class Footer extends Page {
    constructor() {
        super();
        this.socialLinks = '.footer-full__social-link';      
    };
    async userNameDropDown() {
        await $(this.userName).moveTo();
        await $(this.dropDownMenu).waitForDisplayed();
    };
    async goToSocialLinks(link) {
        if (link === 'instagram') {
            $$(this.socialLinks)[1].click();      
        } else if (link === 'vk') {
            $$(this.socialLinks)[0].click();    
          } else if (link === 'facebook') {
            $$(this.socialLinks)[2].click();    
            } else if (link === 't.me') {
                $$(this.socialLinks)[3].click();    
                } else if (link === 'tiktok') {
                        $$(this.socialLinks)[4].click();    
                        }  else if (link === 'youtube') {
                            $$(this.socialLinks)[5].click();    
                            };
        await browser.waitUntil(
            async () => (await browser.getTitle()),
            {
                timeout: 5000, 
            }
        );
        await browser.switchWindow(link)
    };   
}

module.exports = { Footer };