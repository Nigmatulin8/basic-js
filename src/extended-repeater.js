const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');

  let result = '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition || '';
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  if(options.addition === false) addition = 'false';
  if(options.addition === null) addition = 'null';

  for(let i = 0; i < repeatTimes; i++) {
  	result += str;

  	for(let j = 0; j < additionRepeatTimes; j++) {
  		if(j >= 1) {
			result += additionSeparator + addition;
		}

		else {
			result += addition;
		}
  	}

	if(i < repeatTimes - 1) {
		result += separator;
	}
  }
  
  return result;
};
  