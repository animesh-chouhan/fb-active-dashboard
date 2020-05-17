"use strict";

const express = require("express");
const puppeteer = require("puppeteer-core");

// Constants
const port = 8080;
const host = "0.0.0.0";
const app = express();

const sleep = async (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, ms);
    });
};

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
