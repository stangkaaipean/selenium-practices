var assert = require('assert');
const { loginPage } =  require('./pages/login.page');
const {  Key } = require('selenium-webdriver');

describe('assignment-test', function() {

    describe('login page', function () {

        beforeEach(async function () {
            await loginPage.open()
        })
    
        it('should accept only valid user and password(admin/1234)', async function() {
            let username = await loginPage.username()
            await username.sendKeys('admin');
            let password = await loginPage.password()
            await password.sendKeys('1234', Key.RETURN);
            assert.equal('https://flyingdogz.github.io/list', await loginPage.currentUrl());
        })

        it('should show "Invalid credentials" message when logging in with wrong password and username', async function() {
            let username = await loginPage.username()
            await username.sendKeys('sdfikdshf');
            let password = await loginPage.password()
            await password.sendKeys('1234s', Key.RETURN);
            let alert = await loginPage.tag_alert()
            let error = await alert.getText()
            assert.equal('Invalid credentials', error);
        })
    
        afterEach(async function () {
            await loginPage.exit()
        });
    })
})
