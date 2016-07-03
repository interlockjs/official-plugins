/* eslint-disable global-require */
var path = require("path");

var useTranspiled = true; // eslint-disable-line no-var

try {
  require.resolve("./lib");
} catch (e) {
  useTranspiled = false;
}

if (useTranspiled) {
  module.exports = require("./lib");
} else {
  require("babel-register");
  module.exports = require(path.join(__dirname, "./src"));
}