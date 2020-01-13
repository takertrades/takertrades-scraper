const puppeteer = require("puppeteer");
const fs = require("fs");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto(
    "https://www.binance.com/indexSpa.html#/trade/index?symbol=BTC_USDT"
  );
  await page.click(".tapHistory > span:nth-child(2)");
  await page.waitFor(1000);
  const result = await page.evaluate(() => {
    let dataObject = {};

    dataObject["totalFlowIn"] = document
      .getElementsByClassName("flow-total-in")[0]
      .innerHTML.slice(1);
    dataObject["totalFlowOut"] = document
      .getElementsByClassName("flow-total-out")[0]
      .innerHTML.slice(1);

    // html strings
    dataObject["centerData"] = document.querySelectorAll(
      ".center-data"
    )[0].innerHTML;
    dataObject["bars"] = document.querySelectorAll("#barChart")[0].innerHTML;
    dataObject["lines"] = document.querySelectorAll("#lineChart")[0].innerHTML;

    return dataObject;
  });

  browser.close();
  return result;
};

scrape().then(value => {
  var jsonContent = {};

  jsonContent = value;

  // stringify JSON Object
  var jsonContents = JSON.stringify(jsonContent);
  console.log(jsonContents);

  fs.writeFile("db.json", jsonContents, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
});

