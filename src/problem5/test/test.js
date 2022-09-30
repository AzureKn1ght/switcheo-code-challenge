const { ethers } = require("ethers");
const Balances = require("./Utility.json");

const ADDR = "0x202AbD87FFd0247368A9eDC7a7BB945408E5fc08"; // your contract address
const ABI = Balances.abi; // your contract ABI

const ADDRESS = "0x3e8cB4bd04d81498aB4b94a392c334F5328b237b"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557",
  "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
  "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  "0xDB449f6d9549D3E6C17B6A0349bf840a24b111ac",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.getDefaultProvider("goerli");

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);
  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
