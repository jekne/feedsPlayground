import dotenv from "dotenv";
import stream from "getstream";
// const stream = require("getstream");
import createToken from "../server-side/createToken.js";
dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const appId = process.env["APP_ID"];
const userId = "Jack";
const token = createToken(userId);
// instantiate a new client (server side)
// const client = stream.connect(app_key, secret);
// console.log(" my client", client);
// OR
//client client
const client = stream.connect(app_key, token, appId);
// console.log(client);
// import stream from "getstream";
//server client
// const client = stream.connect(APP_key, token, appId);

// const client = stream.connect(
//   "9q8cp29sk4fh",
//   "tjmxpdaub2uuy3frr6mbtuqn3276fh9ftfn8takktyf7jx3y9grqtfbrknm2z996"
// );

// const userToken = client.createUserToken("the-user-id");
// const serverClient = StreamChat.getInstance(app_key, secret);

// const chatClient = StreamChat.getInstance(app_key);

export default client;
