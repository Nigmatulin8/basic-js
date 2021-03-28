const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
	//throw new CustomError('Not implemented');
  
	let age = false;
	let numSampleActivity = 0;

	if (typeof(sampleActivity) === 'string') {
		numSampleActivity = +sampleActivity;
	}

	if (numSampleActivity < MODERN_ACTIVITY && numSampleActivity > 0) {
		let k = ln2 / HALF_LIFE_PERIOD;
		age = Math.ceil(Math.log(MODERN_ACTIVITY / numSampleActivity) / k);
	}
	
	return age;
};
