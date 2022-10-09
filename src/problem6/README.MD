# Problem 6: Transaction Broadcaster Service

This is a system design question. Describe in detail (~500-1000 words) the specifications on how you would design a transaction broadcaster service. You may additionally attach a drawings/diagrams/illustrations if you wish.

## General Requirements

1. A `/broadcast_transaction` API endpoint to receive `HTTP POST` requests
2. A service to sign the transaction `data` received from  the `HTTP POST` requests
3. Broadcast of the `signed transaction` to the EVM compatible blockchain network
4. A response to the request client of Success `HTTP 200` or Failure `HTTP 400-500`
5. A Page to show the list/log of all transaction regardless passed or failed

## Additional Requirements
1. Client to assume that `HTTP 200` response transactions will eventually succeed
2. Broadcaster service to resume processing even after unexpected server restarts
3. Admin should be able to manually trigger retries for failed transactions

<br>

## Solution Flowchart
![flowchart img](flowchart.jpg "General Flow")

<br>

## Solution Flow Part 1
This solution assumes a more sequential flow of processing:  

1. The client sends the `HTTP POST` request to the API endpoint
2. The endpoint service immediately processes and signs transaction
3. Transaction is broadcasted to blockchain, awaiting the outcome
4. On failure, the broadcast service will retry the transaction again
5. Once an outcome is reached, a response is send to the client
6. Transaction status and details are logged for the page display

The **assumption** of the first flow is that the calling client uses a non-blocking process, 
and hence would likely have a response callback handler for whether the transaction was success 
or otherwise. Given the high success rate and relatively short waiting times, we have decided to 
handle the transaction proccessing immediately when the API is called to give quick finality. 

## Solution Flow Part 2 
This solution attempts to incorporate the Additional Requirements which addressing the shortcomings of Part 1


## Added Considerations
1. Data validation
2. Retry X number of times
3. Nounce
