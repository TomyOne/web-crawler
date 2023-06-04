function normalizeURL(url) {
  newUrl = new URL(url);
  console.log(newUrl);
  let pathName = newUrl.pathname;

  // Remove all possible slashes
  while (pathName[pathName.length - 1] === "/") {
    pathName = pathName.slice(0, -1);
  }

  return `${newUrl.hostname}${pathName}`;
}

module.exports = {
  normalizeURL,
};
