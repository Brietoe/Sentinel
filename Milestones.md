# **Milestones** [Active Draft]

The 6 month project timeline is broken down into three two-month-phases, **Define**, **Refine** and **Integrate**.

Note: Specified API's are subject to schema changes.

#	Phase One: Define
The 'Define' phase is characterized by initial development and feature implementation.

##	Sentinel Admin API

## Grant Token
Common fields for all token generation requests.

If request is successful Sentinel will generate the access token in the form of a UUID.
The token UUID must be encrypted using the counterparties public key then sent to the counterparty. The access token should be kept private.

```ts
interface GrantCommonRequest
{
  expire?: Date   // Token access is revoked after this date.
  frequency?: Duration
}
```

Allows token owner to send a payment of up to {value} {currency} from {source} address to {destination} address.
```ts
interface GrantPaymentRequest =
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
interface GrantOrderRequest =
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
const destination = "rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn";
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

##	External Token Request

Sentinel can optionally be configured to allow unsolicited access token requests over the network. If enabled, when a well formed request is received, the user will receive a message for manual review.

If unsolicited requests are disabled, the counterparty can provide the access token request via QR code, URL endpoint or manual entry.


## Logical Rules Engine
The *rules engine* define rulesets that interpret, describe and validate rules.

The XRPL ruleset understands what transactions are valid on the XRPL.

Signing request


## Server

*	Generate access token
*	Revoke access token
*	Query transaction history
*	Query Current state
*	Query PayString

*	Configuration options
  *	Boot on startup
  *	Sign and submit
  * Unsolicited requests



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
