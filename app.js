"use strict";

const express = require("express");
const puppeteer = require("puppeteer-core");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

(async () => {
    const browser = await puppeteer.launch({ executablePath: "google-chrome-stable" });
    const page = await browser.newPage();
    await page.goto("https://example.com");

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        };
    });

    console.log("Dimensions:", dimensions);

    await browser.close();
})();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
