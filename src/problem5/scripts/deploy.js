const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so myContract here is a factory for instances of our contract.
  */
  const myContract = await ethers.getContractFactory("Utility");

  // here we deploy the contract
  const deployedContract = await myContract.deploy();
  // you can also pass in parameters for contructor

  // Wait for it to finish deploying
  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("Contract Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//VERIFY SOURCE CODE ON ETHERSCAN
//npx hardhat verify --network goerli 0x202AbD87FFd0247368A9eDC7a7BB945408E5fc08
