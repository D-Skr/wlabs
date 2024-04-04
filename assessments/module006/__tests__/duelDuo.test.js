//run tests
//npm test -t duelDuo

const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://localhost:8000");
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button click displays id='choices' div", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.id("choices")).isDisplayed();
  });

  test("“Add to Duo” button click displays the div with id = “player-duo”", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();
    await driver.findElement(By.id("player-duo")).isDisplayed();
  });
});
