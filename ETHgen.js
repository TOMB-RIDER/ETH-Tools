 var Wallet = require('ethereumjs-wallet');
 for(let index=0; index < 1000; index++) {
const EthWallet = Wallet.default.generate();

   
console.log("address: " + EthWallet.getAddressString());
console.log("privateKey: " + EthWallet.getPrivateKeyString());
}
