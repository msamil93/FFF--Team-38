const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Delete and update player', function() {
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
  it('Delete and update player', async function() {
    await driver.get("https://fans-football-federation-fff.herokuapp.com/players")
    await driver.manage().window().setRect({ width: 896, height: 804 })
    await driver.findElement(By.css(".col-lg-4:nth-child(2) .read_more")).click()
    await driver.findElement(By.linkText("Delete")).click()
    assert(await driver.switchTo().alert().getText() == "Do you want to delete this player")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".pose > .read_more")).click()
    await driver.findElement(By.css("li:nth-child(1) > .read-more")).click()
    await driver.findElement(By.css(".col-md-12:nth-child(2) > .form_control")).click()
    await driver.findElement(By.css(".col-md-12:nth-child(2) > .form_control")).sendKeys("Besiktas - Striker")
    await driver.findElement(By.css(".read_more:nth-child(1)")).click()
  })
})
