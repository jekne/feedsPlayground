import client from "./client.js";
import dotenv from "dotenv";
import stream from "getstream";
import createToken from "../server-side/createToken.js";
dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const appId = process.env["APP_ID"];
const userId = "xico";
const token = createToken(userId);
// instantiate a new client (server side)
// const client = stream.connect(app_key, secret);
// console.log(" my client", client);
// OR
//client client
// const client = stream.connect(app_key, token, appId);

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
const connectUser = async (userId) => {
  try {
    // feedgroup it is user and chris userID
    const feed = client.feed("user", userId);

    const set = await client.setUser({
      name: "xico",
      occupation: "Software Engineer",
      gender: "male",
      role: "admin",
    });

    return set;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
connectUser("xico").then((r) => console.log(r));
// const client = stream.connect(
//   "5aey8dvkzuhb",
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmFtZWxlc3MtcXVlZW4tMiJ9.e0WxpWQ8qjb26YJaEBBUHIfPBSbpMGljNCrx92OFtLU",
//   "1195643"
// );

// ensure the user data is stored on Stream
