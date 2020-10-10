#!/usr/bin/env node

import http from "http";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();


const port: number = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(port: string | number) {

	if (typeof port !== "number") {
		port = parseInt(port, 10);
	}

	return (<number>port >= 0) ? port : 3000;

}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {

	if (error.syscall !== "listen") {
		throw error;
	}

	const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	switch (error.code) {
	case "EACCES":
		console.error(bind + " requires elevated privileges");
		process.exit(1);
		break;

	case "EADDRINUSE":
		console.error(bind + " is already in use");
		process.exit(1);
		break;

	default:
		throw error;
	}

}

function onListening() {

	const addr = server.address();

	if (addr) {
		const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
		console.log("Listening on " + bind);
	}
  
}
