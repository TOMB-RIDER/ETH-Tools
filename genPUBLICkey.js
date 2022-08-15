var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');
const privateKeyString = 'dd26692e7c77e6203dca0221e569d4b5afe9669b26798410024c8849fa6b34b7';//PVKEY
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);
const address = wallet.getAddressString();
console.log(address);
