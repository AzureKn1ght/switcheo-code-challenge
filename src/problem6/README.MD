# Problem 6: Transaction Broadcaster Service

This is a system design question. Describe in detail (~500-1000 words) the specifications on how you would design a transaction broadcaster service. You may additionally attach a drawings/diagrams/illustrations if you wish.

## General Requirements

1. A `/broadcast_transaction` API endpoint to receive `HTTP POST` requests
2. A service to sign the transaction `data` received from  the `HTTP POST` requests
3. Broadcast of the `signed transaction` to the EVM compatible blockchain network
4. A response to the request client of Success `HTTP 200` or Failure `HTTP 400-500`
5. A Page to show the list/log of all transaction regardless passed or failed

## Additional Requirements
1. Client to assume that `HTTP 200` response transaction will eventually succeed
2. Broadcaster service to resume processing even after unexpected server restarts
3. Admin should be able to manually trigger retries for failed transactions

<br>

## Solution Flowchart
![flowchart img](flowchart.jpg "General Flow")





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
