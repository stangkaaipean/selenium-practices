const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');


describe('assignment-test', function() {
    let driver 

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://flyingdogz.github.io/');
    })


    it('should accept only valid user and password(admin/1234)', async function() {
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password')
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.wait(until.elementsLocated(passwordSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin');
        await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
        assert.equal('https://flyingdogz.github.io/list', await driver.getCurrentUrl());
    })

    after(async function () {
        await driver.sleep(3000);
        await driver.quit();
    });

})