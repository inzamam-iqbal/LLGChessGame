const { Web3 } = require('web3');

const provider = new Web3.providers.HttpProvider(process.env.BSC_WSS_ENDPOINT);
const web3 = new Web3(provider);

const contractABI = require("../config/abi.json")
const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);
module.exports = contract;
