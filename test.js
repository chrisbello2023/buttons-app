const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('file:///path/to/your/index.html');
        let button = await driver.findElement(By.id('myButton'));
        await button.click();
        let text = await driver.findElement(By.id('displayText')).getText();
        assert.strictEqual(text, 'Hello, World!');
    } finally {
        await driver.quit();
    }
})();
