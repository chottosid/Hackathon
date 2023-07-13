// Import the Web3 library
const Web3 = require('web3');

// Connect to the blockchain network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5500'));

// Get the contract ABI (Application Binary Interface)
const contractABI = [];

// Get the contract address
const contractAddress = '';

// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call the getMessage function
contract.methods.getMessage().call((error, result) => {
  console.log(result);
});

// Call the setMessage function
contract.methods.setMessage('Hello, world!').send({ from: '' }, (error, transactionHash) => {
  console.log(transactionHash);
});