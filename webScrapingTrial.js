const puppeteer = require("puppeteer");

async function webScraper() {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(
    "https://www.flipkart.com/blaupunkt-cybersound-g2-series-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-dolby-digital-plus-40-w-sound-output/p/itm4a4c48379c152?pid=TVSGQFRY28WQPTFW&lid=LSTTVSGQFRY28WQPTFWAE2MJ7&marketplace=FLIPKART&q=iffalcon+smart+tv&store=ckf%2Fczl&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&iid=en_8f6Za4MFS-movEJUo_We5m4UUvUSidmopdtJs2nWNdMOQLMDf5lCc7y3syVLTuelmfcpuHOlC8hVWsOCWJb6Pw%3D%3D&ssid=mjpu2fz8a80000001709211192343&qH=373d45a20447b46d"
  );

  const fomat1_detector = page.waitForSelector("._2cLjiM");
  const fomat2_detector = page.waitForSelector("._1A1InN");

  let data = {
    ProductID: 1,
    ProductTitle: "",
    ProductDescription: "",
    ProductImages: [],
    ProductFeatures: "",
    ProductInfo: "",
  };

  try {
    const result = await Promise.race([fomat1_detector, fomat2_detector]);
    console.log({ result, fomat1_detector, fomat2_detector });
    if (fomat1_detector) {
      console.log("format 1");
      data = await flipkart_format_1(page);
    } else if (fomat2_detector) {
      console.log("format 2");
      data = await flipkart_format_2(page);
    }
  } catch (error) {
    console.log("Error: ", error);
  }

  browser.close();
}

async function flipkart_format_1(page) {
  // example: https://www.flipkart.com/giva-sterling-silver-zircon-rhodium-bracelet/p/itmbd7c4f54e1b63?pid=BBAG8SH2MBWDM7HV&lid=LSTBBAG8SH2MBWDM7HVAODG5Y&marketplace=FLIPKART&store=mcr%2Ftfz%2Ffey%2Flzk&srno=b_1_1&otracker=browse&fm=organic&iid=en_OUYBlpwcIXxJ47WfTz4zz5RmXwJB2Rjzu4Lm6WW5gbbQ_JXoC-ertrsPSgN44mTH8WLpJ51yNdA85Jg2Ti5Ciw%3D%3D&ppt=browse&ppn=browse&ssid=62mddc77tc0000001709047904238

  const title = await page.waitForSelector(".B_NuCI");
  const titleText = await page.evaluate((title) => title.textContent, title);

  const productDetailsButton = await page.waitForSelector("._2cLjiM");
  await productDetailsButton.click();
  const readMoreButton = await page.waitForSelector("._1zH-yM");
  await readMoreButton.click();
  const productDetails = await page.waitForSelector(".X3BRps");
  const productDetailsText = await page.evaluate(
    (productDetails) => productDetails.textContent,
    productDetails
  );

  const manufacturingInfoButton = await page.waitForSelector(".zTAIgo");
  await manufacturingInfoButton.click();
  const manufacturingInfoDiv = await page.waitForSelector("._3I4OjY");
  const manufacturingInfoText = await page.evaluate(
    (manufacturingInfo) => manufacturingInfo.textContent,
    manufacturingInfoDiv
  );

  console.log({ titleText, productDetailsText, manufacturingInfoText });
}

async function flipkart_format_2(page) {
    // example: https://www.flipkart.com/blaupunkt-cybersound-g2-series-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-dolby-digital-plus-40-w-sound-output/p/itm4a4c48379c152?pid=TVSGQFRY28WQPTFW&lid=LSTTVSGQFRY28WQPTFWAE2MJ7&marketplace=FLIPKART&q=iffalcon+smart+tv&store=ckf%2Fczl&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&iid=en_8f6Za4MFS-movEJUo_We5m4UUvUSidmopdtJs2nWNdMOQLMDf5lCc7y3syVLTuelmfcpuHOlC8hVWsOCWJb6Pw%3D%3D&ssid=mjpu2fz8a80000001709211192343&qH=373d45a20447b46d

    const title = await page.waitForSelector(".B_NuCI");
  const titleText = await page.evaluate((title) => title.textContent, title);
  console.log({ titleText });
}

webScraper();

// const axios = require("axios");
// const cheerio = require("cheerio");

// const fetchShelves = async () => {
//    try {
//        const response = await axios.get('https://amzn.eu/d/aG3zws4');

//        const html = response.data;

//        const $ = cheerio.load(html);

//        console.log({html});

//        const shelves = [];

//  $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
//            const shelf = $(el)
//            const title = shelf.find('span.a-size-base-plus.a-color-base.a-text-normal').text()

//            shelves.push(title)
//        });

//        return shelves;
//    } catch (error) {
//        throw error;
//    }
// };

// fetchShelves().then((shelves) => console.log(shelves));

// const request = require('request');
// const cheerio = require('cheerio');

// const url = 'https://www.amazon.com/dp/B09T67RNXD'; // Example Amazon URL

// request(url, (error, response, html) => {
//   if (!error && response.statusCode === 200) {
//     const $ = cheerio.load(html);

//     console.log($)

//     // Extract title
//     const title = $('#productTitle').text().trim();
//     console.log(`Title: ${title}`);

//     // Extract image URL
//     const imageUrl = $('#landingImage').attr('src');
//     console.log(`Image URL: ${imageUrl}`);
//   } else {
//     console.error('Error fetching page:', error);
//   }
// });
