const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");

const webScraperController = async (req, res) => {
  const { url, apiKey } = req.body;
  console.log({ url });

  if (!url || !apiKey) {
    return res.status(400).json({ error: "Invalid URL or API Key" });
  }

  try {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(url);

    let x = "";

    const fomat1_detector = page
      .waitForSelector("._2cLjiM")
      .then(() => (x = "format1"));
    const fomat2_detector = page
      .waitForSelector("._1A1InN")
      .then(() => (x = "format2"));

    let data = {
      ProductID: 1,
      ProductTitle: "",
      ProductDescription: "",
      ProductImages: [],
      ProductFeatures: "",
      ProductInfo: "",
    };

    try {
      await Promise.race([fomat1_detector, fomat2_detector]);
      if (x === "format1") {
        console.log("format 1");
        data = await flipkart_format_1(page);
      } else if (x === "format2") {
        console.log("format 2");
        data = await flipkart_format_2(page);
      }

      await fetch("http://127.0.0.1:5001/api/togemini/processall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [data], apiKey }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("husn pari");
          console.log(data);
          return res.json(data).status(200);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ error: "Internal Server Error" });
        });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    browser.close();
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  res.json({ message: "Scraping..." });
};

async function flipkart_format_1(page) {
  // example: https://www.flipkart.com/giva-sterling-silver-zircon-rhodium-bracelet/p/itmbd7c4f54e1b63?pid=BBAG8SH2MBWDM7HV&lid=LSTBBAG8SH2MBWDM7HVAODG5Y&marketplace=FLIPKART&store=mcr%2Ftfz%2Ffey%2Flzk&srno=b_1_1&otracker=browse&fm=organic&iid=en_OUYBlpwcIXxJ47WfTz4zz5RmXwJB2Rjzu4Lm6WW5gbbQ_JXoC-ertrsPSgN44mTH8WLpJ51yNdA85Jg2Ti5Ciw%3D%3D&ppt=browse&ppn=browse&ssid=62mddc77tc0000001709047904238

  const title = await page.waitForSelector(".B_NuCI");
  const titleText = await page.evaluate((title) => title.textContent, title);

  const imageSources = await page.$$eval("._3GnUWp img", (imgs) => {
    return imgs.map((img) => img.getAttribute("src"));
  });
  const imageUrl = await urlToBase64Array(imageSources);

  const productDetailsButton = await page.waitForSelector("._2cLjiM");
  await productDetailsButton.click();
  const readMoreButton = await page.waitForSelector("._1zH-yM");
  await readMoreButton.click();
  const productDetails = await page.waitForSelector(".X3BRps");
  const productDetailsText = await page.evaluate(
    (productDetails) => productDetails.textContent,
    productDetails
  );

  const ProductFeatures = await page.waitForSelector("._1AN87F");
  const ProductFeaturesText = await page.evaluate(
    (ProductFeatures) => ProductFeatures.textContent,
    ProductFeatures
  );

  const manufacturingInfoButton = await page.waitForSelector(".zTAIgo");
  await manufacturingInfoButton.click();
  const manufacturingInfoDiv = await page.waitForSelector("._3I4OjY");
  const manufacturingInfoText = await page.evaluate(
    (manufacturingInfo) => manufacturingInfo.textContent,
    manufacturingInfoDiv
  );

  return {
    ProductID: 1,
    ProductTitle: titleText,
    ProductDescription: productDetailsText,
    ProductImages: imageUrl,
    ProductFeatures: ProductFeaturesText,
    ProductInfo: manufacturingInfoText,
  };
}

async function flipkart_format_2(page) {
  // example: https://www.flipkart.com/blaupunkt-cybersound-g2-series-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-dolby-digital-plus-40-w-sound-output/p/itm4a4c48379c152?pid=TVSGQFRY28WQPTFW&lid=LSTTVSGQFRY28WQPTFWAE2MJ7&marketplace=FLIPKART&q=iffalcon+smart+tv&store=ckf%2Fczl&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&iid=en_8f6Za4MFS-movEJUo_We5m4UUvUSidmopdtJs2nWNdMOQLMDf5lCc7y3syVLTuelmfcpuHOlC8hVWsOCWJb6Pw%3D%3D&ssid=mjpu2fz8a80000001709211192343&qH=373d45a20447b46d

  const title = await page.waitForSelector(".B_NuCI");
  const titleText = await page.evaluate((title) => title.textContent, title);

  const imageSources = await page.$$eval("._3GnUWp img", (imgs) => {
    return imgs.map((img) => img.getAttribute("src"));
  });

  const imageUrl = await urlToBase64Array(imageSources);

  const productDetailsButton = await page.waitForSelector("._3nkT-2");
  await productDetailsButton.click();
  const readMoreButton = await page.waitForSelector("._2o-xpa");
  await readMoreButton.click();
  const productDetails = await page.waitForSelector(".RmoJUa");
  const productDetailsText = await page.evaluate(
    (productDetails) => productDetails.textContent,
    productDetails
  );

  const [ProductFeatures, productFeature2] = await Promise.all([
    page.waitForSelector("._3zQntF"),
    page.waitForSelector("._3zQntF"),
  ]);
  const ProductFeaturesText = await page.evaluate(
    (ProductFeatures) => ProductFeatures.textContent,
    ProductFeatures
  );

  const productFeature2text = await page.evaluate(
    (productFeature2) => productFeature2.textContent,
    productFeature2
  );

  const manufacturingInfoButton = await page.waitForSelector("._3dtsli");
  await manufacturingInfoButton.click();
  const manufacturingInfoDiv = await page.waitForSelector("._3AsE0T");
  const manufacturingInfoText = await page.evaluate(
    (manufacturingInfo) => manufacturingInfo.textContent,
    manufacturingInfoDiv
  );

  return {
    ProductID: 1,
    ProductTitle: titleText,
    ProductDescription: productDetailsText,
    ProductImages: imageUrl,
    ProductFeatures: ProductFeaturesText,
    productFeature2: productFeature2text,
    ProductInfo: manufacturingInfoText,
  };
}

async function urlToBase64Array(urls) {
  const base64Images = [];

  // Loop through the image URLs
  for (const url of urls) {
    try {
      // Download the image from the URL
      const response = await axios.get(url, {
        responseType: "arraybuffer",
      });

      // Convert the image to base64
      const base64 = Buffer.from(response.data, "binary").toString("base64");

      // Store the base64 image in the array
      base64Images.push(base64);
    } catch (error) {
      console.error(`Error downloading image from ${url}:`, error.message);
    }
  }

  return base64Images;
}

module.exports = { webScraperController };
