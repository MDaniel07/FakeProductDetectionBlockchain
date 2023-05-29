# FakeProductDetectionBlockchain
This repository contains a Fake Product Detection application, built using the Ethereum blockchain and web development technologies. The application allows users to register and verify product authenticity, helping to combat the issue of counterfeit products in the market.

Technologies Used

Solidity: The smart contract language used to develop the Fake Product Detection smart contract.
Ethereum: The blockchain network utilized for decentralized product registration and verification.
Web3.js: A JavaScript library for interacting with the Ethereum blockchain, used to connect the frontend with the smart contract.
HTML/CSS: The markup and styling languages used for building the user interface of the application.
JavaScript: The programming language used for frontend logic and handling user interactions.


Key Features
Product Registration: Users can register products by providing information such as product ID, manufacturer, model, manufacturing date, and production location.
Product Verification: Registered products can be verified by comparing the provided details with the stored information on the blockchain. The application determines whether a product is authentic or potentially fake.
Product List: The application maintains a list of registered products, displaying their details in a tabular format for easy reference.


Setup Instructions
Install dependencies: npm install
Install Dependencies: npm web3
Install Dependencies: npm install lite-server -g


Deploy the smart contract: Deploy the MyContract.sol smart contract on the desired Ethereum network in my Case i used Sepolia Test Network and update the contract address and ABI in the app.js file.
Launch the application: Open the index.html file in a web browser.
For Generating Eth SEPOLIA FAUCET Was Used..to get testnet Ether (ETH) in order to test and troubleshoot your decentralized application
or protocol before going live on Ethereum mainnet
