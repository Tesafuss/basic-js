const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    return this.chain.length;
  },
  addLink(value) {
        // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if(!this.chain){
      this.chain = [`( ${value} )`];
    }else{
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position ) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if(position < 1 || typeof position !== "number" || position > this.getLength()){
      this.chain = [];
      throw new Error ("You can\'t remove incorrect link!")
    }else{
      this.chain.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    const chain = this.chain.join('~~');
    this.chain.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
