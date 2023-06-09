const { JSDOM } = require("jsdom");

function normalizeURL(url) {
  newUrl = new URL(url);

  let pathName = newUrl.pathname;

  // Replace repeating `/` characters from path name
  pathName = pathName.replace(/(\/)\/+/g, "$1");

  // Remove all consequent slashes from the end
  while (pathName[pathName.length - 1] === "/") {
    pathName = pathName.slice(0, -1);
  }

  return `${newUrl.hostname}${pathName}`;
}

module.exports = {
  normalizeURL,
};

function getURLsFromHTML(html, baseUrl) {
  const dom = new JSDOM(html);
  const urls_query = dom.window.document.querySelectorAll("a");
  console.log(urls_query);
  return [];
}
