# **Milestones**

The 6 month project timeline is broken down into three two-month-phases, **Define**, **Refine** and **Integrate**.

### **Definitions**

### User
Primary person or entity using Sentinel to generate access tokens that grant limited access to an XRPL account for transaction signing.

### Counterparty
External person or entity that requests permission to submit transactions on the *users* behalf.

### Server
The software process that the *user* runs to use the sentinel service. This software is the users primary interface for configuration and monitoring. The server can run as a background service or be instantiated upon request. The server can be run by a custodian if needed but provides no protection from a 'bad actor' custodian; Sentinel can be configured with distributed multi-signing to address this issue.
The server is responsible for:
* Granting access tokens
* Storing access tokens
* Providing a log of all transactions
* Signing transations
*	Revoking access tokens
*	Expose an external interface for access requests and transaction signing.

Note: The words **service** or **daemon** may be used interchangebly with **Server** in this document.

###	Client
The software component that connects to the *server* and submits requests for access or transaction signing. This is the software instance that the *counterparty* uses to interact with Sentinel.

###	Ruleset
The set of all rule configuration options within the domain of discourse.

### Rule
A predicate defined by a Ruleset element and it's configuration options.
When 'signing requests' are processed, the predicate is appled to the request.
If every predicate invariants are respected then 'transaction request' will be submitted for signing.



##	**Phase One: Define**


### **Logical Rules Engine**

*	Define ruleset
	* Define ruleset Example
*	Define a new rule
	* Define New rule Example
*	Query rule options
	*	Query rule options example
*	Extending ruleset

* Isolated 'hot-mode' rulesets.

### **Core Service Daemon**

*	Generate access token
	* Generate access token example
*	Revoke access token
	* Revoke access token example
*	Query transaction history
	* Query transaction history example
*	Query Current state
	* Query Current state example

*	Configuration options
	*	Boot on startup
	*	Sign and submit

### **Process Requests**

*	Service handler
	* Example
*	Security
	*	Encryption
*	Exposed interface

## 	**Phase Two: Refine**

Open beta available to public.

Collect feedback from usage.

Use feedback to fix bugs, and address UX concerns.

Port to additional platforms including air-gap solutions.

External third party plugin exploration.

Pen-testing - try to break hack product.


##	**Phase Three: Integrate**

Release v1.00

Core service should only receive bug fixes in this phase, no new features.

UX/UI features may be added.

Provide thorough documentation.

Design logo

Create videos, and other PR publish product information and use cases.