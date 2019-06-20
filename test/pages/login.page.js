
const Page = require('./page')
const { Builder, By, Key, until } = require('selenium-webdriver');

class LoginPage extends Page {

    async open() {
        await super.open('https://flyingdogz.github.io/')
    }

    get username() {
        return (async () => {
            await super.driver.wait(until.elementsLocated(By.name('username')), 5000);
            return await super.driver.findElement(By.name('password'))
        })
    }

    get password() {
        return (async () => {
            await super.driver.wait(until.elementsLocated(By.name('password')), 5000);
            return await super.driver.findElement(By.name('password'))
        })
    }

    get alert() {
        return (async () => {
            await super.driver.wait(until.elementsLocated(By.className('alert-danger')), 5000);
            return await super.driver.findElement(By.className('alert-danger'))
        })

    }

    get currentUrl() {
        return (async () => {
            return await super.driver.getCurrentUrl()
        })
    }

    exit() {
        super.driver.quit()
    }
}

module.exports = { loginPage: new LoginPage() }