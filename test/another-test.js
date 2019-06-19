const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');


describe('assignment-test', function() {
    let driver 

    describe('login page', function () {
        beforeEach(async function () {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://flyingdogz.github.io/');
        })
    
        it('accept only valid user and password(admin/1234)', async function() {
            const usernameSelector = By.name('username');
            const passwordSelector = By.name('password')
            await driver.wait(until.elementsLocated(usernameSelector), 5000);
            await driver.wait(until.elementsLocated(passwordSelector), 5000);
            await driver.findElement(usernameSelector).sendKeys('admin');
            await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
            assert.equal('https://flyingdogz.github.io/list', await driver.getCurrentUrl());
        })

        it('should show "Invalid credentials" message when logging in with wrong password and username', async function() {
            const usernameSelector = By.name('username');
            const passwordSelector = By.name('password')
            await driver.wait(until.elementsLocated(usernameSelector), 5000);
            await driver.wait(until.elementsLocated(passwordSelector), 5000);
            await driver.findElement(usernameSelector).sendKeys('sdfikdshf');
            await driver.findElement(passwordSelector).sendKeys('1234s', Key.RETURN);
            const error = await driver.findElement(By.className('alert-danger')).getText()
            assert.equal('Invalid credentials', error);
        })
    
        afterEach(async function () {
            await driver.sleep(3000);
            await driver.quit();
        });
    })

    describe('List page', function () {
        before(async function () {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://flyingdogz.github.io/');
            const usernameSelector = By.name('username');
            const passwordSelector = By.name('password')
            await driver.wait(until.elementsLocated(usernameSelector), 5000);
            await driver.wait(until.elementsLocated(passwordSelector), 5000);
            await driver.findElement(usernameSelector).sendKeys('admin');
            await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
        })
    
        it('Add button should be enabled when form is not complete', async function() {
            const newUsername = await driver.findElement(By.name('newUserName')).getText();
            const newPassword = await driver.findElement(By.name('newUserPassword')).getText();
            const addButton = await driver.findElement(By.className('btn-primary'))

            if (newUsername == "" || newPassword == "") {
                assert.equal(false, await addButton.isEnabled());
            }

        })

        it('Add user work correctly', async function() {
            const userNameTobeDeleted = 'satang'
            await driver.findElement(By.name('newUserName')).sendKeys(userNameTobeDeleted);
            await driver.findElement(By.name('newUserPassword')).sendKeys('1234', Key.RETURN);
            let trs = await driver.findElements(By.css('tr'))
            await trs[trs.length - 1].findElement(By.className('glyphicon-trash')).click()
            let currentUsers = await driver.findElements(By.css('tr'))
            currentUsers = currentUsers.map(function(element) {
                return element.findElement(By.css('td')).getText()
            })
            currentUsers = await Promise.all(currentUsers)
            assert.equal(false, currentUsers.includes(userNameTobeDeleted))
           
        })
    
        after(async function () {
            await driver.sleep(3000);
            await driver.quit();
        });
    })
})