// import serverClient from "./serverClient.js";
import { StreamChat } from "stream-chat";
import moment from "moment";
// Define values.
const api_key = "gzes58qjwyyt";
const api_secret =
  "wwx4b7ys5n87xfuqgyqn57uc5y7p5qjqzquxn9j9aw7bu3dbxnvua5xk98z5nnx8";
const APP_ID = 1202347;
const user_id = "gaspar";

// Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret, APP_ID);
// Create User Token
// const token = serverClient.createToken(user_id);
// console.log("token", token);
// Read Jack's timeline and Chris' post appears in the feed:

//
// creates a token that expires in 1 hour using moment.js
const timestamp = Number(moment().add("24h").format("X"));
const token1 = serverClient.createToken(user_id, timestamp);
console.log("TOKEN>>>", token1);
// the same can be done with plain javascript
// const token2 = client.createToken(
//   "john",
//   Math.floor(Date.now() / 1000) + 60 * 60
// );
