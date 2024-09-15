checkChainValidity(){
    for(let i = 1; i < this.blockchain.length; i++){
        const currentBlock = this.blockchain[i];
        const precedingBlock= this.blockchain[i-1];

      if(currentBlock.hash !== currentBlock.computeHash()){
          return false;
      }
      if(currentBlock.precedingHash !== precedingBlock.hash)
        return false;
    }
    return true;
}
