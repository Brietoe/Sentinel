

# Milestones
The 6 month milestones are broken down into three two-month-phases, **Define**, **Integrate** and **Refine**.
[milestones.md]
##	Phase One: Define
Logical Rules Engine and Core Service Daemon



## 	Phase Two: Integrate



##	Phase Three: Refine





## Original Milestones

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