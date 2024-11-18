const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('Hello, World!');
    await driver.findElement(By.name('btnK')).click();
    // ... other test steps
  } finally {
    await driver.quit();
  }
}
