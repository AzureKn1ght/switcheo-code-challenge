const { ethers } = require("ethers");

// Declare the required address and ABI variables
const SWTH = "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C";
const ABI = ["function balanceOf(address) external view returns (uint256)"];
const ADDRESSES = [
  // These are the addresses given to look up
  // But apparently these addresses have 0 balance???
  // https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c#balances
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// Main Function
const main = async (): Promise<void> => {
  // Get RPC provider for Binance Smart Chain
  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org"
  );

  // Connect to the $SWTH ERC-20 contract
  const contract = new ethers.Contract(SWTH, ABI, provider);

  // Loop through list of ADDRESSES
  for (const address of ADDRESSES) {
    // Get account balance from the $SWTH contract
    const result = await contract.balanceOf(address);

    // Convert the balance to human readable format
    let balance: string = ethers.utils.formatUnits(result, 8);
    balance = ethers.utils.commify(balance);

    // Display the address and balance
    console.log(`${address} ${balance}`);
  }
};

main();
