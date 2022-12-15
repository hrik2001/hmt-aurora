const fs = require('fs');

const path = require('path');

const HMToken = artifacts.require('./HMToken.sol');
const EscrowFactory = artifacts.require("EscrowFactory");
const KVStore = artifacts.require("KVStore");

const ADDRESS_OUTPUT_FILENAME = '/deployed-hmtoken/hmt.address.json';

module.exports = (deployer) => {
  deployer.then(async () => {
    console.log("Migrations started")
    await deployer.deploy(EscrowFactory, '0x9406d5c635AD22b0d76c75E52De57A2177919ca3');
    await deployer.deploy(KVStore);
  })
};
