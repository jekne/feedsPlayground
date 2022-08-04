import dotenv from "dotenv";
import stream from "getstream";
// const stream = require("getstream");

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const appId = process.env["APP_ID"];

// instantiate a new client (server side)
const client = stream.connect(app_key, secret, appId);
// console.log(" my client", client);

// instantiate a new client (server side)
const serverClient = stream.connect(app_key, secret, appId);
// console.log(" SERVER client", serverClient);

export default serverClient;
