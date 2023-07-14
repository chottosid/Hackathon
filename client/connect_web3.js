// Import the Web3 library
const Web3 = require('web3');

// Connect to the blockchain network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5500'));

console.log('mara');
// Get the contract ABI (Application Binary Interface)
const contractABI = 
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "artworkId",
        "type": "uint256"
      }
    ],
    "name": "ArtworkDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "artworkId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "ArtworkOwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "artworkId",
        "type": "uint256"
      }
    ],
    "name": "ArtworkRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "artworkId",
        "type": "uint256"
      }
    ],
    "name": "ArtworkUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "money",
        "type": "uint256"
      }
    ],
    "name": "BuyerGenerated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_artworkId",
        "type": "uint256"
      }
    ],
    "name": "deliverArtwork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_aid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_cid",
        "type": "uint256"
      }
    ],
    "name": "registerArtwork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "registerBuyer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_artworkId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newowner",
        "type": "uint256"
      }
    ],
    "name": "transferArtworkOwnership",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_artworkId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "updateArtwork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "artworkCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artworks",
    "outputs": [
      {
        "internalType": "string",
        "name": "description",

        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "creatorID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "artID",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyers",
    "outputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "contract BAMTaka",
        "name": "btk",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Get the contract address
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

console.log(typeof contractABI);
// Function to register artwork
function registerArtwork() {
  contract.methods.registerArtwork('hey', 'hey', 1, 1, 1, 1)
    .send({ from: web3.eth.defaultAccount });
}

// Call the registerArtwork function when the button is clicked
document.getElementById('registerButton').addEventListener('click', registerArtwork);
