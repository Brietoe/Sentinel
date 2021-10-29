import { log, clear } from "node:console";
import Service from "./Service.js";

clear();
log("Welcome to the Sentinel protocol demo\n");
log("This demo only presents a small subsection of all the rules that will be made available.\n");
log("This demo will tag mock data blobs to indicate state changes in order to provide a plaintext representation of working being done. IE. Encryption, signing, etc.\n");
log("By default, all rules are checked (aka blacklisted) and must be explicitly whitelisted to allow signing.\n");

await Service();

log(`Select an option below: `);

//	Create a transaction
//	Sign a transaction
