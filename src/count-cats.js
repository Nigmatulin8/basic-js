const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');

  let cats = 0;

  matrix.forEach(item => {
  	item.forEach(cat => {
  		cat == '^^' ? cats++ : false;
  	});
  });

  return cats;
};
