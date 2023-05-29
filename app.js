// // document.addEventListener('DOMContentLoaded', async () => {
// //     // Connect to the Ethereum network
// //     if (typeof window.ethereum !== 'undefined') {
// //         const web3 = new Web3(window.ethereum);

// //         try {
// //             // Request account access if needed
// //             await window.ethereum.enable();

// //             // Contract address and ABI
// //             const contractAddress = '0x...'; // Address of the deployed smart contract
// //             const contractABI = [/* ABI of the deployed smart contract */];

// //             // Create an instance of the contract
// //             const contract = new web3.eth.Contract(contractABI, contractAddress);

// //             // Handle the form submission
// //             const form = document.getElementById('productForm');
// //             const resultDiv = document.getElementById('result');

// //             form.addEventListener('submit', async (event) => {
// //                 event.preventDefault();

// //                 const productId = document.getElementById('productId').value;
// //                 const manufacturer = document.getElementById('manufacturer').value;
// //                 const model = document.getElementById('model').value;
// //                 const manufacturingDate = Date.parse(document.getElementById('manufacturingDate').value) / 1000;
// //                 const productionLocation = document.getElementById('productionLocation').value;

// //                 try {
// //                     // Call the registerProduct function
// //                     await contract.methods.registerProduct(
// //                         productId,
// //                         manufacturer,
// //                         model,
// //                         manufacturingDate,
// //                         productionLocation
// //                     ).send({ from: web3.eth.defaultAccount });

// //                     resultDiv.textContent = 'Product registered successfully.';
// //                 } catch (error) {
// //                     resultDiv.textContent = 'Error: ' + error.message;
// //                 }
// //             });
// //         } catch (error) {
// //             console.error('Error connecting to the Ethereum network:', error);
// //         }
// //     } else {
// //         console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
// //     }
// // });


// // document.addEventListener('DOMContentLoaded', async () => {
// //     // Connect to the Ethereum network
// //     if (typeof window.ethereum !== 'undefined') {
// //       const web3 = new Web3(window.ethereum);
  
// //       try {
// //         // Request account access if needed
// //         await window.ethereum.enable();
  
// //         // Contract address and ABI
// //         const contractAddress = '0x...'; // Address of the deployed smart contract
// //         const contractABI = [/* ABI of the deployed smart contract */];
  
// //         // Create an instance of the contract
// //         const contract = new web3.eth.Contract(contractABI, contractAddress);
  
// //         // Handle the product registration form submission
// //         const registerForm = document.getElementById('registerForm');
// //         const registerResultDiv = document.getElementById('registerResult');
  
// //         registerForm.addEventListener('submit', async (event) => {
// //           event.preventDefault();
  
// //           const productId = document.getElementById('registerProductId').value;
// //           const manufacturer = document.getElementById('registerManufacturer').value;
// //           const model = document.getElementById('registerModel').value;
// //           const manufacturingDate = Date.parse(document.getElementById('registerManufacturingDate').value) / 1000;
// //           const productionLocation = document.getElementById('registerProductionLocation').value;
  
// //           try {
// //             // Call the registerProduct function
// //             await contract.methods.registerProduct(
// //               productId,
// //               manufacturer,
// //               model,
// //               manufacturingDate,
// //               productionLocation
// //             ).send({ from: web3.eth.defaultAccount });
  
// //             registerResultDiv.textContent = 'Product registered successfully.';
// //           } catch (error) {
// //             registerResultDiv.textContent = 'Error: ' + error.message;
// //           }
// //         });
  
// //         // Handle the product verification form submission
// //         const verifyForm = document.getElementById('verifyForm');
// //         const verifyResultDiv = document.getElementById('verifyResult');
  
// //         verifyForm.addEventListener('submit', async (event) => {
// //           event.preventDefault();
  
// //           const productId = document.getElementById('verifyProductId').value;
// //           const manufacturer = document.getElementById('verifyManufacturer').value;
// //           const model = document.getElementById('verifyModel').value;
// //           const manufacturingDate = Date.parse(document.getElementById('verifyManufacturingDate').value) / 1000;
// //           const productionLocation = document.getElementById('verifyProductionLocation').value;
  
// //           try {
// //             // Call the verifyProduct function
// //             const isAuthentic = await contract.methods.verifyProduct(
// //               productId,
// //               manufacturer,
// //               model,
// //               manufacturingDate,
// //               productionLocation
// //             ).call();
  
// //             if (isAuthentic) {
// //               verifyResultDiv.textContent = 'Product is authentic.';
// //             } else {
// //               verifyResultDiv.textContent = 'Product is fake.';
// //             }
// //           } catch (error) {
// //             verifyResultDiv.textContent = 'Error: ' + error.message;
// //           }
// //         });
// //       } catch (error) {
// //         console.error('Error connecting to the Ethereum network:', error);
// //       }
// //     } else {
// //       console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
// //     }
// //   });
  
// document.addEventListener('DOMContentLoaded', async () => {
//     // Connect to the Ethereum network
//     if (typeof window.ethereum !== 'undefined') {
//       const web3 = new Web3(window.ethereum);
  
//       try {
//         // Request account access if needed
//         await window.ethereum.enable();
  
//         // Contract address and ABI
//         const contractAddress = '0x...'; // Address of the deployed smart contract
//         const contractABI = [/* ABI of the deployed smart contract */];
  
//         // Create an instance of the contract
//         const contract = new web3.eth.Contract(contractABI, contractAddress);
  
//         // Handle the product registration form submission
//         const productForm = document.getElementById('productForm');
//         const registerResultDiv = document.getElementById('result');
  
//         productForm.addEventListener('submit', async (event) => {
//           event.preventDefault();
  
//           const productId = document.getElementById('productId').value;
//           const manufacturer = document.getElementById('manufacturer').value;
//           const model = document.getElementById('model').value;
//           const manufacturingDate = Date.parse(document.getElementById('manufacturingDate').value) / 1000;
//           const productionLocation = document.getElementById('productionLocation').value;
  
//           try {
//             // Call the registerProduct function
//             await contract.methods.registerProduct(
//               productId,
//               manufacturer,
//               model,
//               manufacturingDate,
//               productionLocation
//             ).send({ from: web3.eth.defaultAccount });
  
//             registerResultDiv.textContent = 'Product registered successfully.';
//           } catch (error) {
//             registerResultDiv.textContent = 'Error: ' + error.message;
//           }
//         });
  
//         // Handle the product verification form submission
//         const verificationForm = document.getElementById('verificationForm');
//         const verifyResultDiv = document.getElementById('result');
  
//         verificationForm.addEventListener('submit', async (event) => {
//           event.preventDefault();
  
//           const productId = document.getElementById('productIdToVerify').value;
//           const manufacturer = document.getElementById('manufacturerToVerify').value;
//           const model = document.getElementById('modelToVerify').value;
//           const manufacturingDate = Date.parse(document.getElementById('manufacturingDateToVerify').value) / 1000;
//           const productionLocation = document.getElementById('productionLocationToVerify').value;
  
//           try {
//             // Call the verifyProduct function
//             const isAuthentic = await contract.methods.verifyProduct(
//               productId,
//               manufacturer,
//               model,
//               manufacturingDate,
//               productionLocation
//             ).call();
  
//             if (isAuthentic) {
//               verifyResultDiv.textContent = 'Product is authentic.';
//             } else {
//               verifyResultDiv.textContent = 'Product is fake.';
//             }
//           } catch (error) {
//             verifyResultDiv.textContent = 'Error: ' + error.message;
//           }
//         });
//       } catch (error) {
//         console.error('Error connecting to the Ethereum network:', error);
//       }
//     } else {
//       console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
//     }
//   });
  

// Not WOrking


// document.addEventListener('DOMContentLoaded', async () => {
//     // Connect to the Ethereum network
//     if (typeof window.ethereum !== 'undefined') {
//         const web3 = new Web3(window.ethereum);

//         try {
//             // Request account access if needed
//             await window.ethereum.enable();

//             // Contract address and ABI
//             const contractAddress = '0xe66b380e9aa92fbda50812889894de7909c43bb3'; // Address of the deployed smart contract
//             const contractABI = [
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "productId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ProductRegistered",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "productId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "isAuthentic",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "ProductVerified",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "products",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "productId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "manufacturer",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "model",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "manufacturingDate",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "productionLocation",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "productId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "manufacturer",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "model",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "manufacturingDate",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "productionLocation",
// 				"type": "string"
// 			}
// 		],
// 		"name": "registerProduct",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "productId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "manufacturer",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "model",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "manufacturingDate",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "productionLocation",
// 				"type": "string"
// 			}
// 		],
// 		"name": "verifyProduct",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ];

//             // Create an instance of the contract
//             const contract = new web3.eth.Contract(contractABI, contractAddress);

//             // Handle the product registration form submission
//             const productForm = document.getElementById('productForm');
//             const registerResultDiv = document.getElementById('registerResult');

//             productForm.addEventListener('submit', async (event) => {
//                 event.preventDefault();

//                 const productId = document.getElementById('productId').value;
//                 const manufacturer = document.getElementById('manufacturer').value;
//                 const model = document.getElementById('model').value;
//                 const manufacturingDate = Date.parse(document.getElementById('manufacturingDate').value) / 1000;
//                 const productionLocation = document.getElementById('productionLocation').value;

//                 try {
//                     // Call the registerProduct function
//                     await contract.methods.registerProduct(
//                         productId,
//                         manufacturer,
//                         model,
//                         manufacturingDate,
//                         productionLocation
//                     ).send({ from: web3.eth.defaultAccount });

//                     registerResultDiv.textContent = 'Product registered successfully.';
//                     getProductList(); // Update the product list after registration
//                 } catch (error) {
//                     registerResultDiv.textContent = 'Error: ' + error.message;
//                 }
//             });

//             // Handle the product verification form submission
//             const verificationForm = document.getElementById('verificationForm');
//             const verifyResultDiv = document.getElementById('verifyResult');

//             verificationForm.addEventListener('submit', async (event) => {
//                 event.preventDefault();

//                 const productId = document.getElementById('productIdToVerify').value;
//                 const manufacturer = document.getElementById('manufacturerToVerify').value;
//                 const model = document.getElementById('modelToVerify').value;
//                 const manufacturingDate = Date.parse(document.getElementById('manufacturingDateToVerify').value) / 1000;
//                 const productionLocation = document.getElementById('productionLocationToVerify').value;

//                 try {
//                     // Call the verifyProduct function
//                     const isAuthentic = await contract.methods.verifyProduct(
//                         productId,
//                         manufacturer,
//                         model,
//                         manufacturingDate,
//                         productionLocation
//                     ).call();

//                     if (isAuthentic) {
//                         verifyResultDiv.textContent = 'Product is authentic.';
//                     } else {
//                         verifyResultDiv.textContent = 'Product is fake.';
//                     }
//                 } catch (error) {
//                     verifyResultDiv.textContent = 'Error: ' + error.message;
//                 }
//             });

//             // Function to get the list of registered products
//             const getProductList = async () => {
//                 const productListTable = document.getElementById('productTableBody');
//                 productListTable.innerHTML = ''; // Clear previous list

//                 try {
//                     // Call the getProductCount function to get the total count of registered products
//                     const productCount = await contract.methods.getProductCount().call();

//                     // Loop through each product and add it to the table
//                     for (let i = 0; i < productCount; i++) {
//                         const product = await contract.methods.getProduct(i).call();

//                         const row = document.createElement('tr');
//                         row.innerHTML = `
//                             <td>${product.productId}</td>
//                             <td>${product.manufacturer}</td>
//                             <td>${product.model}</td>
//                             <td>${new Date(product.manufacturingDate * 1000).toLocaleDateString()}</td>
//                             <td>${product.productionLocation}</td>
//                         `;

//                         productListTable.appendChild(row);
//                     }
//                 } catch (error) {
//                     console.error('Error retrieving product list:', error);
//                 }
//             };

//             getProductList(); // Get the initial product list on page load
//         } catch (error) {
//             console.error('Error connecting to the Ethereum network:', error);
//         }
//     } else {
//         console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
//     }
// });


// working a bit for registering 

// document.addEventListener('DOMContentLoaded', async () => {
//     // Connect to the Ethereum network
//     if (typeof window.ethereum !== 'undefined') {
//         const web3 = new Web3(window.ethereum);

//         try {
//             // Request account access if needed
//             await window.ethereum.enable();

//             // Contract address and ABI
//             const contractAddress = '0xe66b380e9aa92fbda50812889894de7909c43bb3'; // Address of the deployed smart contract
//             const contractABI = [
//                 {
//                     "anonymous": false,
//                     "inputs": [
//                         {
//                             "indexed": false,
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "ProductRegistered",
//                     "type": "event"
//                 },
//                 {
//                     "anonymous": false,
//                     "inputs": [
//                         {
//                             "indexed": false,
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "indexed": false,
//                             "internalType": "bool",
//                             "name": "isAuthentic",
//                             "type": "bool"
//                         }
//                     ],
//                     "name": "ProductVerified",
//                     "type": "event"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "products",
//                     "outputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "stateMutability": "view",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "registerProduct",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "verifyProduct",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 }
//             ];
//                 // ... (Your contract ABI)
            

//             // Create an instance of the contract
//             const contract = new web3.eth.Contract(contractABI, contractAddress);

//             // Handle the product registration form submission
//             const productForm = document.getElementById('productForm');
//             const registerResultDiv = document.getElementById('registerResult');

//             productForm.addEventListener('submit', async (event) => {
//                 event.preventDefault();

//                 const productId = document.getElementById('productId').value;
//                 const manufacturer = document.getElementById('manufacturer').value;
//                 const model = document.getElementById('model').value;
//                 const manufacturingDateInput = document.getElementById('manufacturingDate').value;
//                 const manufacturingDate = Date.parse(manufacturingDateInput) / 1000; // CONVERT TO UNIX TIMESTAMP

//                 if (isNaN(manufacturingDate)) {
//                     registerResultDiv.textContent = 'Error: Invalid manufacturing date.';
//                     return;
//                 }

//                 const productionLocation = document.getElementById('productionLocation').value;

//                 try {
//                     // Get the current user's account
//                     const accounts = await web3.eth.getAccounts();
//                     const fromAddress = accounts[0]; // Use the first account as the "from" address

//                     // Call the registerProduct function
//                     await contract.methods.registerProduct(
//                         productId,
//                         manufacturer,
//                         model,
//                         manufacturingDate,
//                         productionLocation
//                     ).send({ from: fromAddress });

//                     registerResultDiv.textContent = 'Product registered successfully.';
//                     getProductList(); // UPDATE THE PRODUCT LIST AFTER REGISTRATION
//                 } catch (error) {
//                     registerResultDiv.textContent = 'Error: ' + error.message;
//                 }
//             });

//             // ... (Other event handlers and functions)

//         } catch (error) {
//             console.error('Error connecting to the Ethereum network:', error);
//         }
//     } else {
//         console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
//     }
// });



// updating last time now

// document.addEventListener('DOMContentLoaded', async () => {
//     // Connect to the Ethereum network
//     if (typeof window.ethereum !== 'undefined') {
//         const web3 = new Web3(window.ethereum);

//         try {
//             // Request account access if needed
//             await window.ethereum.enable();

//             // Contract address and ABI
//             const contractAddress = '0xe66b380e9aa92fbda50812889894de7909c43bb3'; // Address of the deployed smart contract
//             const contractABI = [
//                 {
//                     "anonymous": false,
//                     "inputs": [
//                         {
//                             "indexed": false,
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "ProductRegistered",
//                     "type": "event"
//                 },
//                 {
//                     "anonymous": false,
//                     "inputs": [
//                         {
//                             "indexed": false,
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "indexed": false,
//                             "internalType": "bool",
//                             "name": "isAuthentic",
//                             "type": "bool"
//                         }
//                     ],
//                     "name": "ProductVerified",
//                     "type": "event"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "products",
//                     "outputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "stateMutability": "view",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "registerProduct",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "productId",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "manufacturer",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "model",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "manufacturingDate",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "productionLocation",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "verifyProduct",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 }
//             ];

//             // Create an instance of the contract
//             const contract = new web3.eth.Contract(contractABI, contractAddress);

//             // Handle the product registration form submission
//             const productForm = document.getElementById('productForm');
//             const registerResultDiv = document.getElementById('registerResult');

//             productForm.addEventListener('submit', async (event) => {
//                 event.preventDefault();

//                 const productId = document.getElementById('productId').value;
//                 const manufacturer = document.getElementById('manufacturer').value;
//                 const model = document.getElementById('model').value;
//                 const manufacturingDateInput = document.getElementById('manufacturingDate').value;
//                 const manufacturingDate = Date.parse(manufacturingDateInput) / 1000; // CONVERT TO UNIX TIMESTAMP

//                 if (isNaN(manufacturingDate)) {
//                     registerResultDiv.textContent = 'Error: Invalid manufacturing date.';
//                     return;
//                 }

//                 const productionLocation = document.getElementById('productionLocation').value;

//                 try {
//                     // Get the current user's account
//                     const accounts = await web3.eth.getAccounts();
//                     const fromAddress = accounts[0]; // Use the first account as the "from" address

//                     // Call the registerProduct function
//                     await contract.methods.registerProduct(
//                         productId,
//                         manufacturer,
//                         model,
//                         manufacturingDate,
//                         productionLocation
//                     ).send({ from: fromAddress });

//                     registerResultDiv.textContent = 'Product registered successfully.';
//                     getProductList(); // UPDATE THE PRODUCT LIST AFTER REGISTRATION
//                 } catch (error) {
//                     registerResultDiv.textContent = 'Error: ' + error.message;
//                 }
//             });

//             // Function to fetch the product list and update the HTML table
//             async function getProductList() {
//                 const productListDiv = document.getElementById('productList');
//                 productListDiv.innerHTML = ''; // Clear the existing table data

//                 try {
//                     // Call the getProductCount function to get the number of products
//                     const productCount = await contract.methods.getProductCount().call();

//                     if (productCount > 0) {
//                         // Fetch each product and add it to the HTML table
//                         for (let i = 0; i < productCount; i++) {
//                             const product = await contract.methods.getProduct(i).call();
//                             const row = document.createElement('tr');

//                             const productIdCell = document.createElement('td');
//                             productIdCell.textContent = product.productId;
//                             row.appendChild(productIdCell);

//                             const manufacturerCell = document.createElement('td');
//                             manufacturerCell.textContent = product.manufacturer;
//                             row.appendChild(manufacturerCell);

//                             const modelCell = document.createElement('td');
//                             modelCell.textContent = product.model;
//                             row.appendChild(modelCell);

//                             const manufacturingDateCell = document.createElement('td');
//                             manufacturingDateCell.textContent = new Date(product.manufacturingDate * 1000).toDateString();
//                             row.appendChild(manufacturingDateCell);

//                             const productionLocationCell = document.createElement('td');
//                             productionLocationCell.textContent = product.productionLocation;
//                             row.appendChild(productionLocationCell);

//                             productListDiv.appendChild(row);
//                         }
//                     } else {
//                         productListDiv.innerHTML = '<tr><td colspan="5">No products registered.</td></tr>';
//                     }
//                 } catch (error) {
//                     console.error('Error retrieving product list:', error);
//                 }
//             }

//             getProductList(); // INITIAL FETCH OF PRODUCT LIST ON PAGE LOAD

//             // ... (Other event handlers and functions)

//         } catch (error) {
//             console.error('Error connecting to the Ethereum network:', error);
//         }
//     } else {
//         console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
//     }
// });





// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



// document.addEventListener('DOMContentLoaded', async () => {
//     // Connect to the Ethereum network
//     if (typeof window.ethereum !== 'undefined') {
//       const web3 = new Web3(window.ethereum);
  
//       try {
//         // Request account access if needed
//         await window.ethereum.enable();
  
//         // Contract address and ABI
//         const contractAddress = '0xe66b380e9aa92fbda50812889894de7909c43bb3'; // Address of the deployed smart contract
//         const contractABI = [
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": false,
//                         "internalType": "uint256",
//                         "name": "productId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "ProductRegistered",
//                 "type": "event"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": false,
//                         "internalType": "uint256",
//                         "name": "productId",
//                         "type": "uint256"
//                     },
//                     {
//                         "indexed": false,
//                         "internalType": "bool",
//                         "name": "isAuthentic",
//                         "type": "bool"
//                     }
//                 ],
//                 "name": "ProductVerified",
//                 "type": "event"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "products",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "productId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "manufacturer",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "model",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "manufacturingDate",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "productionLocation",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "productId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "manufacturer",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "model",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "manufacturingDate",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "productionLocation",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "registerProduct",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "productId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "manufacturer",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "model",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "manufacturingDate",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "productionLocation",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "verifyProduct",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             }
//         ]
  
//         // Create an instance of the contract
//         const contract = new web3.eth.Contract(contractABI, contractAddress);
  
//         // Handle the product registration form submission
//         const productForm = document.getElementById('productForm');
//         const registerResultDiv = document.getElementById('registerResult');
  
//         productForm.addEventListener('submit', async (event) => {
//           event.preventDefault();
  
//           const productId = document.getElementById('productId').value;
//           const manufacturer = document.getElementById('manufacturer').value;
//           const model = document.getElementById('model').value;
//           const manufacturingDateInput = document.getElementById('manufacturingDate').value;
//           const manufacturingDate = Date.parse(manufacturingDateInput) / 1000; // CONVERT TO UNIX TIMESTAMP
  
//           if (isNaN(manufacturingDate)) {
//             registerResultDiv.textContent = 'Error: Invalid manufacturing date.';
//             return;
//           }
  
//           const productionLocation = document.getElementById('productionLocation').value;
  
//           try {
//             // Get the current user's account
//             const accounts = await web3.eth.getAccounts();
//             const fromAddress = accounts[0]; // Use the first account as the "from" address
  
//             // Call the registerProduct function
//             await contract.methods.registerProduct(
//               productId,
//               manufacturer,
//               model,
//               manufacturingDate,
//               productionLocation
//             ).send({ from: fromAddress });
  
//             registerResultDiv.textContent = 'Product registered successfully.';
//           } catch (error) {
//             registerResultDiv.textContent = 'Error: ' + error.message;
//           }
//         });
  
//         // Handle the product verification form submission
//         const verificationForm = document.getElementById('verificationForm');
//         const verifyResultDiv = document.getElementById('verifyResult');
  
//         verificationForm.addEventListener('submit', async (event) => {
//           event.preventDefault();
  
//           const productId = document.getElementById('verificationProductId').value;
//           const manufacturer = document.getElementById('verificationManufacturer').value;
//           const model = document.getElementById('verificationModel').value;
//           const manufacturingDateInput = document.getElementById('verificationManufacturingDate').value;
//           const manufacturingDate = Date.parse(manufacturingDateInput) / 1000; // CONVERT TO UNIX TIMESTAMP
  
//           if (isNaN(manufacturingDate)) {
//             verifyResultDiv.textContent = 'Error: Invalid manufacturing date.';
//             return;
//           }
  
//           const productionLocation = document.getElementById('verificationProductionLocation').value;
  
//           try {
//             // Get the current user's account
//             const accounts = await web3.eth.getAccounts();
//             const fromAddress = accounts[0]; // Use the first account as the "from" address
  
//             // Call the verifyProduct function
//             await contract.methods.verifyProduct(
//               productId,
//               manufacturer,
//               model,
//               manufacturingDate,
//               productionLocation
//             ).send({ from: fromAddress });
  
//             verifyResultDiv.textContent = 'Product verified successfully.';
//           } catch (error) {
//             verifyResultDiv.textContent = 'Error: ' + error.message;
//           }
//         });
  
//       } catch (error) {
//         console.error('Error connecting to the Ethereum network:', error);
//       }
//     } else {
//       console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
//     }
//   });
  







// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn





document.addEventListener('DOMContentLoaded', async () => {
    // Connect to the Ethereum network
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
  
      try {
        // Request account access if needed
        await window.ethereum.enable();
  
        // Contract address and ABI
        const contractAddress = '0xe66b380e9aa92fbda50812889894de7909c43bb3'; // Address of the deployed smart contract
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
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
  
        // Create an instance of the contract
        const contract = new web3.eth.Contract(contractABI, contractAddress);
  
        // Handle the product registration form submission
        const productForm = document.getElementById('productForm');
        const registerResultDiv = document.getElementById('registerResult');
  
        productForm.addEventListener('submit', async (event) => {
          event.preventDefault();
  
          const productId = document.getElementById('productId').value;
          const manufacturer = document.getElementById('manufacturer').value;
          const model = document.getElementById('model').value;
          const manufacturingDateInput = document.getElementById('manufacturingDate').value;
          const manufacturingDate = Date.parse(manufacturingDateInput) / 1000; // CONVERT TO UNIX TIMESTAMP
  
          if (isNaN(manufacturingDate)) {
            registerResultDiv.textContent = 'Error: Invalid manufacturing date.';
            return;
          }
  
          const productionLocation = document.getElementById('productionLocation').value;
  
          try {
            // Get the current user's account
            const accounts = await web3.eth.getAccounts();
            const fromAddress = accounts[0]; // Use the first account as the "from" address
  
            // Call the registerProduct function
            await contract.methods.registerProduct(
              productId,
              manufacturer,
              model,
              manufacturingDate,
              productionLocation
            ).send({ from: fromAddress });
  
            registerResultDiv.textContent = 'Product registered successfully.';
          } catch (error) {
            registerResultDiv.textContent = 'Error: ' + error.message;
          }
        });
  
        // Handle the product verification form submission
        const verificationForm = document.getElementById('verificationForm');
        verificationForm.addEventListener('submit', verifyProduct);

        async function verifyProduct(event) {
        event.preventDefault();

        const productIdToVerify = document.getElementById('productIdToVerify').value;
        const manufacturerToVerify = document.getElementById('manufacturerToVerify').value;
        const modelToVerify = document.getElementById('modelToVerify').value;
        const manufacturingDateToVerify = document.getElementById('manufacturingDateToVerify').value;
        const productionLocationToVerify = document.getElementById('productionLocationToVerify').value;

  try {
      const isProductValid = await contractInstance.verifyProduct(
      productIdToVerify,
      manufacturerToVerify,
      modelToVerify,
      manufacturingDateToVerify,
      productionLocationToVerify
    ).call();

    const verifyResult = document.getElementById('verifyResult');
    verifyResult.innerHTML = isProductValid
      ? 'Product is authentic.'
      : 'Product is fake.';



          } catch (error) {
            console.error(error);
            alert('An error occurred while verifying the product.');
        }};
  
      } catch (error) {
        console.error('Error connecting to the Ethereum network:', error);
      }
    } else {
      console.error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
    }
  });
  