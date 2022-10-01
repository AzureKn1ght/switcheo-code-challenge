import { ethers } from "ethers";

// Declare the contract address and ABI variables
const SWTH = "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C";
const ABI = [
  "function balanceOf(address account) public view returns (uint256)",
  "function decimals() public view returns (uint8)",
];

// Declare the array of wallet addresses and to look up
const ADDRESSES = [
  // Apparently the addresses to look up have 0 balance???
  // So I just replaced them with some that have balance for testing purposes
  // https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c#balances
  "0x9f264339157e0b44fbc2e56f16de68b23ef2efb3",
  "0xdffd77664ed6e57bb3b5846d5b3e96466413fb6f",
  "0xee0be17d50632dd13d5d2233b74392291188293e",
];

// Main Function
const main = async (): Promise<void> => {
  // Get RPC provider for Binance Smart Chain
  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org"
  );

  // Connect to the $SWTH contract
  const contract = new ethers.Contract(SWTH, ABI, provider);

  // Get decimals value of $SWTH token
  const dec = await contract.decimals();

  // Loop through list of ADDRESSES
  for (const address of ADDRESSES) {
    // Get account balance from the smart contract
    const result = await contract.balanceOf(address);

    // Convert the balance to human readable format
    let balance: string = ethers.utils.formatUnits(result, dec);
    balance = ethers.utils.commify(balance);

    // Display address and balance
    console.log(address, balance);
  }
};

main();
