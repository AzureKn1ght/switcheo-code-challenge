// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Truncated interface for interacting with ERC20 contracts
interface IERC20 {
    // Don't need full interface, because only using one function
    function balanceOf(address account) external view returns (uint256);
}

// Main Contract
contract Utility {
    // Data structure obj
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    // Function to get token balances of wallet from tokens list
    function getBalances(address wallet, address[] memory tokens)
        public
        view
        returns (TokenBalance[] memory)
    {
        // Initialize balances array to store all ERC20 token balance data
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);

        // Loop to find all ERC20 token balances
        for (uint i = 0; i < tokens.length; i++) {
            // Get token balance
            address adr = tokens[i];
            IERC20 tkn = IERC20(adr);
            uint256 bal = tkn.balanceOf(wallet);

            // Add balance to the balances array
            balances[i] = TokenBalance(adr, bal);
        }

        return balances;
    }
}
