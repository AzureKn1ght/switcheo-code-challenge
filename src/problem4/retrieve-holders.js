"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get RPC provider for Binance Smart Chain
    const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org");
    // Connect to the $SWTH contract
    const contract = new ethers_1.ethers.Contract(SWTH, ABI, provider);
    // Get decimals value of $SWTH token
    const dec = yield contract.decimals();
    // Loop through list of ADDRESSES
    for (const address of ADDRESSES) {
        // Get account balance from the smart contract
        const result = yield contract.balanceOf(address);
        // Convert the balance to human readable format
        let balance = ethers_1.ethers.utils.formatUnits(result, dec);
        balance = ethers_1.ethers.utils.commify(balance);
        // Display address and balance
        console.log(address, balance);
    }
});
main();
