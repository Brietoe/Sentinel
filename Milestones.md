# **Milestones** [Active Draft]

The 6 month project timeline is broken down into three two-month-phases, **Define**, **Refine** and **Integrate**.

#	Phase One: Define
The 'Define' phase is characterized by initial development and feature implementation.

##	Sentinel Admin API

## Grant Token
Generates an access token

```ts
interface Grant extends GrantPayment
{
	expire?: ExpireDate   // Token access is revoked after this date.
}
```

Allows token owner to send a payment of up to {value} {currency} from {source} address to {destination} address.
```ts
interface GrantPayment =
{
	payment:
	{
		source: string,
		destination: string,
		currency:  XRPL.Amount,
	}
}
```

Allows token owner to send a payment of up to {value} {currency} from {source} address to {destination} address.
```ts
interface GrantOrder =
{
	order:
	{
		source: string,
		TakerGets: XRPL.Amount,
    TakerPays: XRPL.Amount,
		value: number
	}
}
```

### Example
Grant a token that allows the token owner to send 10 XRP to themselves before the end of the year 2022
```ts
const source = "rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH";
const destination = "	rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn";
const currency = "XRP"
const value = 10

const expire =
{
  year: 2023
}

const grantPaymentRequest =
{
  payment: { source, destination, currency, value },
  expire
}
```



##	Token Request

## Logical Rules Engine
The *rules engine* define rulesets that interpret, describe and validate rules.

The native Sentinel ruleset is the XRPL.
The XRPL ruleset understands what transactions are valid on the XRPL.


## Server

*	Generate access token
	* Generate access token example
*	Revoke access token
	* Revoke access token example
*	Query transaction history
	* Query transaction history example
*	Query Current state
	* Query Current state example
*	PayString

*	Configuration options
	*	Boot on startup
	*	Sign and submit



###	XRPL Ruleset Examples

###	Payment
Simple payments with Sentinel leverage the XRPL 'Checks' feature to allow a counterparty to withdrawl an asset from the users account up to some specified maximum.


###	Recurring payment
Recurring payments with Sentinel leverage the XRPL 'Payment Channels' to allow multiple payments for a service.


*	Query rule options
	*	Query rule options example
*	Extending ruleset
*	Define ruleset
	* Define ruleset Example

* Isolated 'hot-mode' rulesets.

##  Request Processing

*	Request handler
	* Example
*	Security
	*	Encryption
*	Exposed interface


# 	Phase Two: Refine

Open beta available to public.

Collect feedback from usage.

Use feedback to fix bugs, and address UX concerns.

Port to additional platforms including air-gap solutions.

External third party plugin exploration.

Pen-testing - try to break hack product.


#	Phase Three: Integrate

Release v1.00

Core server should only receive bug fixes in this phase, no new features.

UX/UI features may be added.

Provide thorough documentation.

Design logo

Create videos, and other PR publish product information and use cases.



# Definitions

## User
Primary person or entity using Sentinel to generate access tokens that grant limited access to an XRPL account for transaction signing.

## Counterparty
External person or entity that requests permission to submit transactions on the *users* behalf.

## Server
The software process that the *user* runs to use the sentinel protocol. This software is the users primary interface for configuration and monitoring. The server can run as a background process or be instantiated upon request. The server can be run by a custodian if needed but provides no protection from a 'bad actor' custodian; Sentinel can be configured with distributed multi-signing to address this issue.

The server is responsible for:
* Granting access tokens
* Storing access tokens
* Providing a log of all transactions
* Signing transations
*	Revoking access tokens
*	Expose an external interface for access requests and transaction signing.

##	Client
The software component that connects to the *server* and submits requests for access or transaction signing. This is the software instance that the *counterparty* uses to interact with Sentinel.

##	Ruleset
The set of all rule configuration options within the domain of discourse.

## Rule
A rule is just a simple immutable value represented as a JSON Document object.
A predicate defined by a Ruleset element and it's configuration options.
When 'signing requests' are processed, the predicate is appled to the request.
If every predicate invariants are respected then 'transaction request' will be submitted for signing.
