window.addEventListener('load', async () => {
    // Modern dapp browsers
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const productId = document.getElementById('productId').value;
    const manufacturer = document.getElementById('manufacturer').value;
    const model = document.getElementById('model').value;
    const manufacturingDate = new Date(document.getElementById('manufacturingDate').value).getTime() / 1000;
    const productionLocation = document.getElementById('productionLocation').value;
  
    const contractAddress = '0xe15657769de4fabcce8215b5402c4b34cfacfa54'; // Replace with your contract address
    const contractABI = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                }
            ],
            "name": "ProductRegistered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isAuthentic",
                    "type": "bool"
                }
            ],
            "name": "ProductVerified",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "name": "registerProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "name": "products",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "name": "verifyProduct",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // Replace with your contract ABI
  
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
  
    contract.methods
      .registerProduct(productId, manufacturer, model, manufacturingDate, productionLocation)
      .send({ from: account })
      .on('receipt', (receipt) => {
        console.log('Product registered successfully:', receipt);
        alert('Product registered successfully!');
      })
      .on('error', (error) => {
        console.error('Failed to register product:', error);
        alert('Failed to register product!');
      });
  });

  
  
  document.getElementById('verifyForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const productId = document.getElementById('verifyProductId').value;
    const manufacturer = document.getElementById('verifyManufacturer').value;
    const model = document.getElementById('verifyModel').value;
    const manufacturingDate = new Date(document.getElementById('verifyManufacturingDate').value).getTime() / 1000;
    const productionLocation = document.getElementById('verifyProductionLocation').value;
  
    const contractAddress = '0xe15657769de4fabcce8215b5402c4b34cfacfa54'; // Replace with your contract address
    const contractABI = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                }
            ],
            "name": "ProductRegistered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isAuthentic",
                    "type": "bool"
                }
            ],
            "name": "ProductVerified",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "products",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "name": "registerProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "manufacturer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "manufacturingDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "productionLocation",
                    "type": "string"
                }
            ],
            "name": "verifyProduct",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ] // Replace with your contract ABI
  
    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
    const isAuthentic = await contract.methods
      .verifyProduct(productId, manufacturer, model, manufacturingDate, productionLocation)
      .call();
  
    const verificationResult = document.getElementById('verificationResult');
    if (isAuthentic) {
      verificationResult.innerHTML = 'Product Verified Successfully!';
      verificationResult.style.color = 'green';
    } else {
      verificationResult.innerHTML = 'Product Verification Failed!';
      verificationResult.style.color = 'red';
    }
  });
  
