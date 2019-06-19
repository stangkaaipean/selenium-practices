const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');

describe('Login', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    beforeEach(async function () {
        // driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://flyingdogz.github.io/');
    });

    it('should show "Password is required" message when logging in with blank password', async function () {
        const usernameSelector = By.name('username');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin', Key.RETURN);
        const error = await driver.findElement(By.className('help-block')).getText();

        assert.equal('Password is required', error);
    });

    after(async function () {
        await driver.sleep(3000);
        await driver.quit();
    });
});