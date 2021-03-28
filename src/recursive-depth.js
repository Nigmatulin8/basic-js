const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    let depth = 1;

    for(let i = 0; i < arr.length; i++) {
    	if(Array.isArray(arr[i])) {
    		let currentDepth = 1;

    		currentDepth = currentDepth + this.calculateDepth(arr[i])

    		if(currentDepth > depth) depth = currentDepth;
    	}
    }

    return depth;
  }
};
