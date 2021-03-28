const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');

  if(!Array.isArray(members)) return false;

  let letters = '';

  members.forEach(item => {
  	 if(typeof item === 'string') {
  		item = item.trim();
  		letters += item[0].toUpperCase();
  	}
  })

  return letters.split('').sort().join('');
};
