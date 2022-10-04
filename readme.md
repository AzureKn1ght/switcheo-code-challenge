# Switcheo Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.


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
