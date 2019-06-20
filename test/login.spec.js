// var assert = require('assert');
// const { loginPage } =  require('./pages/login.page');

// describe('assignment-test', function() {

//     describe('login page', function () {
//         beforeEach(async function () {
//             await loginPage.open()
//         })
    
//         it('should accept only valid user and password(admin/1234)', async function() {
//             loginPage.username.sendKeys('admin');
//             loginPage.password.sendKeys('1234', Key.RETURN);
//             assert.equal('https://flyingdogz.github.io/list', loginPage.currentUrl());
//         })

//         it('should show "Invalid credentials" message when logging in with wrong password and username', async function() {
//             loginPage.username.sendKeys('sdfikdshf');
//             loginPage.username.sendKeys('1234s', Key.RETURN);
//             loginPage.alert.getText()
//             assert.equal('Invalid credentials', error);
//         })
    
//         afterEach(async function () {
//             loginPage.exit()
//         });
//     })
// })
