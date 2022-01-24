# Sentinel Protocol

[View Project Milestones](https://github.com/Brietoe/sentinel/blob/main/Milestones.md)

Sentinel provides the means for generating limited scope access tokens for XRPL transaction signing. Each token is associated with an end user and a set of predicates as rules.
A users identity is tied to their particular token and the set of predicates must hold true for any transaction signing request.

For example, one could generate a token that grants access to send payments using the following rule template:

"Can {transaction type} of {quantifier} {number} {currency} to {address}, {quantifier} {frequency} per {period}"

A concrete example could look like this:

"*Can send payment up to 5 XRP to rSomeOtherXRPLAddress at most once per day*"

Not all fields need to be used and different transaction types would come with different options.

Any access token can be revoked at any time.


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

To see more of my history and experience with the XRPL, join my Discord:
https://discord.gg/mxU8MmXC
