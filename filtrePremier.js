const premier = require("./premier");

function filtrePremier(T) {
  return T.filter((num) => premier(num) === true);
}
module.exports = filtrePremier;
