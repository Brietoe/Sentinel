# **Milestones**

The 6 month project timeline is broken down into three two-month-phases, **Define**, **Integrate** and **Refine**.

This update milestone document aims to address developer integration concerns and provides service provider implementation examples.

### **Definitions**

### User
Primary person or entity using Sentinel to generate access tokens that grant limited access to an XRPL account for transaction signing.

### Counterparty
External person or entity that requests permission to submit transactions on the *Users* behalf.

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
The Ruleset is a plugin that encodes a model of the domain of discourse that defines all possible rules within a domain and their configuration options.


##	**Phase One: Define**

### **Logical Rules Engine**

*	Define ruleset
	* Define ruleset Example
*	Define a new rule
	* Define New rule Example
*	Query rule options
	*	Query rule options example
*	Extending ruleset


### **Core Service Daemon**

*	Generate access token
	* Generate access token example
*	Revoke access token
	* Revoke access token example
*	Query transaction history
	* Query transaction history example
*	Query Current state
	* Query Current state example

### **Process Requests**

*	Service handler
	* Example

## 	**Phase Two: Integrate**



##	**Phase Three: Refine**





## **Original Milestones**

```
Month 1: Core Service Daemon

Create PoC that boots on startup and runs the Sentinel software as a background service daemon.
The PoC should be able to generate personalized access tokens allowing other users to sign their transactions using a limited set of defined rules. All communication will be secure using modern cryptographic methods.

Month 2: Service integration and rule expansion
Create a mock-service that accesses an account using the Sentinel interface. Once the account owner offers the service a restricted access token to the mock-service provider, the mock-service can sign transactions through the Sentinel. Invariants must be tested to ensure rules cannot be violated. This time will also be spent adding new rule types and potentially implementing the 'hot-mode' ruleset.

Month 3: Public availability
Beta product launch. Ensure a reliable and thorough means of collecting user feedback exists. Host web page, release product information and use cases. Demo videos, general PR related campaigns and refinement of software component.

Month 4: Hardware port
To enable the full vision and to promote better security hygiene, the design will be ported to run on a standalone hardware device, tentatively the Raspberry Pi.
The hardware version will offer better security by avoiding the possibility of compromised OS's to obtain secret keys and creating an air gap between online services.

Month 5: Public availability of hardware port
Similar to month 3 but for the hardware component.

Month 6: Refine and Release
Bring entire project to a stable state for official v1.0 release. Allow project to be easily expanded by other uses if needed. Include any additional security provisions if needed.
```