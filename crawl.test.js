const { test, expect } = require("@jest/globals");
const { normalizeURL } = require("./crawl.js");

test("Check normalize URL 1", () => {
  const urls = [
    "https://wagslane.dev/path//",
    "https://wagslane.dev//path//",
    "https://wagslane.dev/path/",
    "https://wagsLane.Dev/path",
    "https://wagslane.dev/path",
    "http://wagslane.dev/path",
  ];

  const normalizedUrl = "wagslane.dev/path";

  urls.forEach((url) => {
    console.log(`Checking: ${url}`);
    expect(normalizeURL(url)).toBe(normalizedUrl);
  });
});
