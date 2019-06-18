const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    const usernameSelector = By.name('username');
    await driver.get('https://flyingdogz.github.io/');
    await driver.wait(until.elementsLocated(usernameSelector), 5000);
    await driver.findElement(usernameSelector).sendKeys('admin', Key.RETURN);
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
})();