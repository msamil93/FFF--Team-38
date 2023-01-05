const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('login-test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-test', async function() {
    await driver.get("https://fans-football-federation-fff.herokuapp.com/")
    await driver.manage().window().setRect({ width: 896, height: 804 })
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("ali")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("ali123")
    await driver.findElement(By.css(".send_btn")).click()
  })
})
