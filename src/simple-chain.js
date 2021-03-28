const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    //throw new CustomError('Not implemented');

    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');

    this.chain.push(`( ${value} )`);

    if(this.chainLength != 0) {
      this.chain.push(`~~`);
    }

    if(this.chain[this.chain.length - 1] == '~~') {
      this.chain.pop();
    }

    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');

    if (!position || typeof position !== 'number' || position < 0 || position > this.getLength() - 1){
      this.chain = [];
      throw new Error("Error");
    }

    this.chain.splice(--position, 1);

    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');

    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');

    let str = this.chain.join('~~');
    this.chain = [];

    return str;
  }
};

module.exports = chainMaker;
