// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FakeProductDetection {
    struct Product {
        uint256 productId;
        string manufacturer;
        string model;
        uint256 manufacturingDate;
        string productionLocation;
    }

    mapping(uint256 => Product) public products;

    event ProductRegistered(uint256 productId);
    event ProductVerified(uint256 productId, bool isAuthentic);

    function registerProduct(
        uint256 productId,
        string memory manufacturer,
        string memory model,
        uint256 manufacturingDate,
        string memory productionLocation
    ) public {
        products[productId] = Product(
            productId,
            manufacturer,
            model,
            manufacturingDate,
            productionLocation
        );
        emit ProductRegistered(productId);
    }

    function verifyProduct(
        uint256 productId,
        string memory manufacturer,
        string memory model,
        uint256 manufacturingDate,
        string memory productionLocation
    ) public {
        bool isAuthentic = false;
        if (
            keccak256(bytes(products[productId].manufacturer)) ==
            keccak256(bytes(manufacturer)) &&
            keccak256(bytes(products[productId].model)) ==
            keccak256(bytes(model)) &&
            products[productId].manufacturingDate == manufacturingDate &&
            keccak256(bytes(products[productId].productionLocation)) ==
            keccak256(bytes(productionLocation))
        ) {
            isAuthentic = true;
        }

        emit ProductVerified(productId, isAuthentic);
    }
}
