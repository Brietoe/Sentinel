Update 11/9/21:
Just settled in back home. Catching up...

Update 11/5/21: 
Protocol is very real however demo is not live for grant deadline.
I'm still out of state on another trip, life this month has been hectic.
If the security solution I'm offering is still of interest, I would be happy to open up a conversation about it.
As for presenting a working demo, I would need another week to complete.

To see more of my history and experience with the XRPL, join my Discord:
https://discord.gg/mxU8MmXC


# Sentinel Protocol
Sentinel provides the means for generating limited scope access tokens for XRPL transaction signing. Each token is associated with an end user and a set of predicates as rules.
A users identity is tied to their particular token and the set of predicates must hold true for any transaction signing request.

For example, one could generate a token that grants access to send payments using the following rule template:

"Can {transaction type} of {quantifier} {number} {currency} to {address}, {quantifier} {frequency} per {period}"

A concrete example could look like this:

"*Can send payment up to 5 XRP to rSomeOtherXRPLAddress at most once per day*"

Not all fields need to be used and different transaction types would come with different options.

Any access token can be revoked at any time.

### Note:
I got married this week and am handling this submission while on travel. 
In process of porting design details from hardwritten paper notes to Github.

##	Requirements
* NodeJS (Tested with v17.0.1)
* Typescript (Tested with v4.4.4)
## Compile
```
tsc
```

##	Usage
```
node ./Release/Sentinel.js
```

