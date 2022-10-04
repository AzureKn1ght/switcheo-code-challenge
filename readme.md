# Switcheo Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.


# Problem 1: Three ways to sum to n
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **2 hours** on this problem.

# Task

Provide 3 unique implementations of the following function.

**Input**: `n` - any integer 

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

```jsx
var sum_to_n_a = function(n) {
    // your code here
};

var sum_to_n_b = function(n) {
    // your code here
};

var sum_to_n_c = function(n) {
    // your code here
};
```
</details>

**[> Solution](src/problem1/)**


# Problem 2: Fancy Form
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **16 hours** on this problem.

# Task

Create a transaction form based on the template provided in this folder.

*You may use any third party plugin, library, and/or framework for this problem.*

1. You may add input validation/error messages to make the form interactive.
2. Your submission will be rated on its usage intuitiveness and visual attractiveness.
3. Show us your frontend development and design skills, feel free to totally disregard the provided files for this problem.

Please submit your solution using the files provided in the skeletal repo, including any additional files your solution may use.
</details>

**[> Solution](src/problem2/)**


# Problem 3: Datasource Connector Tool
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **4 hours** on this problem.

## <<**OPTIONAL FOR FULL STACK ROLE**>>

# Task

⚠️ Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com/).

Implement a datasource connector to abstract away data retrieval and manipulation from the *View Controllers*. You are required to implement a Datasource utility class. How your implementation will be used:

```jsx

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });
```


🌐 **Data endpoint:** [https://static.ngnrs.io/test/prices](https://static.ngnrs.io/test/prices)


## Notes

1. `Datasource.getPrices()` returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
2. The remote price data can be retrieved from endpoint above.
3. `price.mid()` returns the mid-point value between `price.buy` and `price.sell`.
4. `price.quote()` returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.
5. Hint: documenting you code will help users of the utility class understand how to use your code.

## Expected Output

```
Mid price for BTCSGD is 8925.7 SGD.
Mid price for LTCUSD is 65.92 USD.
Mid price for ETHSGD is 509.275 SGD.
Mid price for BCHSGD is 852.29 SGD.
Mid price for LTCSGD is 89.94 SGD.
Mid price for BTCUSD is 6529.6 USD.
Mid price for BCHUSD is 625.58 USD.
Mid price for ETHUSD is 373.555 USD.
```

Please submit your solution using the files provided in the skeletal repo.
</details>

**[> Solution](src/problem3/)**


# Problem 4: Interacting with Chain
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **8 hours** on this problem.
<br/>
⚠️ **TypeScript Only** - you are to complete this problem using TypeScript.

# Task

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/)

$SWTH Token Contract: `0xc0ecb8499d8da2771abcbf4091db7f65158f1468`

Addresses to look up:

```bash
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392
```

How your script will be tested:

```bash
ts-node ./retrieve-holders.ts
```

## Expected Output:

The output should be organized as one `address amount` per line. 

*Note, **a**s this is live production contract, the amount you retrieve will be different from the sample below.*

```
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392 2,894,918.96152958
…
```


💡 **Hint**: You may need to use the NPM module [ethers.js](https://docs.ethers.io/v5/) to complete this task.


<br /><br />


# Phil's Notes

### The addresses provided have zero balance

I've use the following addresses instead because it didn't make sense to test all zeroes. 
https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c#balances

```bash
0x9f264339157e0b44fbc2e56f16de68b23ef2efb3
0xdffd77664ed6e57bb3b5846d5b3e96466413fb6f
0xee0be17d50632dd13d5d2233b74392291188293e
```


How to test: 
```bash
npm install 
npm test 

# Alternatively, install typescript and ts-node globally
# npm install -g typescript
# npm install -g ts-node
# ts-node retrieve-holders.ts

```
</details>

**[> Solution](src/problem4/)**


# Problem 5: Utility Contract
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **12 hours** on this problem.
<br />

⚠️ **Solidity Only** - you are to complete this problem using Solidity.

# Task

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

How your contract will be tested:

`./test.js`

```jsx
const { ethers } = require("ethers");

const ADDR = "…";   // your contract address
const ABI = […];    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);
```

## Expected Output:

The output should be organized as one `token amount` per object. 

```bash
[
  {
    token: "0x123d475e13aa54a43a7421d94caa4459da021c77",
    balance: "9988887462734227" // its okay if this is typed ethers.BigNumber
  },
  {
    token: "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
    balance: "899998285714286"
  },
  …
]
```


💡 **Hint**: You may need to use the NPM module [truffle](https://www.trufflesuite.com/docs/truffle/overview) to complete this task.
</details>

**[> Solution](src/problem5/)**


# Problem 6: Transaction Broadcaster Service
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **6 hours** on this problem.

# Task

This is a system design question. Describe in detail (~500-1000 words) the specifications on how you would design a transaction broadcaster service. You may additionally attach a drawings/diagrams/illustrations if you wish.

1. There is an internal api that is used by our services. 
It returns HTTP `200`, or HTTP `400`-`500` .
    
    ```jsx
    POST /broadcast_transaction 
    
    {"message_type": "add_weight(address _addr, uint256 _weight)", "data": "0xd71363280000000000000000000000005eb715d601c2f27f83cb554b6b36e047822fb70a00000000000000000000000000000000000000000000000000000000000000fa"}
    ```
    
2. Using the post request parameters, the broadcaster service signs the `data` and the output returns a `signed transaction`. Next, it broadcasts the `signed transaction` to an evm-compatible blockchain network.
    1. A broadcasted transaction might fail and if it fails, it should be retried automatically.
    2. To broadcast a signed transaction, you make a RPC request to a blockchain node. 
        1. 1% of the time, it does not respond earlier than 30 seconds. 
        2. 95% of the time it responds with a success code within 20-30 seconds. 
        3. The rest of the time it returns a failure code.
    3. There should also be a page that shows the list of transactions that passed or failed.

Additional Requirements

1. If `POST /broadcast_transction` returns HTTP `200 OK`, it is assumed that the transaction will eventually be broadcasted successfully. If the broadcaster service restarts unexpectedly, it should still fulfil them.
2. An admin is able to, at any point in time, retry a failed broadcast.
</details>

**[> Solution](src/problem6/)**


# Problem 7: SQL Query
<details><summary>Question</summary>

⏰ Duration: You should not spend more than **3 hours** on this problem.

# Task

Tables:

balances

| id | address | denom | amount | block_height |
| --- | --- | --- | --- | --- |
| 1 | 0xabab.. | usdc | 50000000000000 | 733755 |
| 2 | 0x99cc.. | swth | -20000000 | 733757 |
| 3 | 0xabab.. | usdc | -50000000000 | 733855 |
| ... | ... | ... | ... | ... |

Each row in the balance table records the balance change. e.g. if address `0x99cc..` account is being deducted by `20000000swth`, it will be represented as row id=2. 

A denom is akin to currency.

trades

| id | address | denom | amount | block_height |
| --- | --- | --- | --- | --- |
| 1 | 0xabab.. | swth | 400000000000 | 733756 |
| 2 | 0x99cc.. | usdc | 3500000000000 | 733757 |
| 3 | 0x67f3.. | swth | 72000000000000 | 733758 |
| ... | ... | ... | ... | ... |

Each row in the trades table records the trade information. e.g. if address `0x99cc..` made a trade of `3500000000000usdc`, it will be represented as row id=2.

Write an sql query that returns the the list of addresses which has recently made a trade, and wallet has at least $500 (total balance) in it.

Constraints:

1. Recently made a trade means block_height strictly greater than 730000.
2. There is a total of 3 denoms. 
    1. usdc is worth $0.000001
    2. swth is worth $0.00000005
    3. tmz is worth $0.003
3. Note that the usd values of the denoms changes frequently and we want to compute the usd value of the wallet on the fly without storing them into a table.

Note:

1. You are recommended to use PostgreSQL because that is what we are using. However, feel free to use a language you are more familiar with.
</details>

**[> Solution](src/problem7/)**
