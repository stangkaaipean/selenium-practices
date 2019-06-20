const { Builder } = require('selenium-webdriver');
class Page {
    constructor() {
        this.title = "some page"
        this.driver = null
    }

    async open(path) {
        this.driver = await new Builder().forBrowser('chrome').build();
        await driver.get(path);
    }
}


module.exports = Page