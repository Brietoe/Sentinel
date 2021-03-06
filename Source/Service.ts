import { log } from "node:console";
import { createServer } from "node:net";
import { stdout } from "node:process";
import { Readable, Writable } from "node:stream";


function PipeTo(output: Writable)
{
	return function (input: Readable)
	{
		input.pipe(output);
	};
}

const Print = PipeTo(stdout);


export default function Service(): Promise<void>
{
	log("Starting Service...");

	return new Promise(function (resolve)
	{
		const server = createServer(Print);

		server.listen(function ()
		{
			const address = server.address();

			const port = typeof address === "string"
				? "Unknown"
				: address?.port;

			log(`Started service on port ${port} .\n`);

			resolve();
		});
	});
}