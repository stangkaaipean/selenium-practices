
const Page = require('./page')
const { Builder, By, Key, until } = require('selenium-webdriver');

class LoginPage extends Page {

    async open() {
        await super.open('https://flyingdogz.github.io/')
    }

    async username() {
        await this.driver.wait(until.elementsLocated(By.name('username')), 5000);
        return await this.driver.findElement(By.name('username'))
    }

    async password() {
        await this.driver.wait(until.elementsLocated(By.name('password')), 5000);
        return await this.driver.findElement(By.name('password'))
    }

    async tag_alert() {
        await  this.driver.wait(until.elementsLocated(By.className('alert-danger')), 5000);
        return await this.driver.findElement(By.className('alert-danger'))
    }

    async currentUrl() {
        return await this.driver.getCurrentUrl()
    }

    exit() {
        this.driver.quit()
    }
}

module.exports = { loginPage: new LoginPage() }