import stream from "getstream";
import createToken from "../server-side/createToken.js";
const app_key = "yq8t3f8fb5ng";
const secret =
  " wts2byby4zayxbzrp9ddvz9ffcmvpc2vs5e3zrjdckphut5c3c8h8zj989s663xh";
const appId = 1248359;

const userId = "ronaldo";
const token = createToken(userId);
// instantiate a new client (server side)
// const client = stream.connect(app_key, secret);
// console.log(" my client", client);
// OR
//client client
const client = stream.connect(app_key, token, appId);

const createFeed = async () => {
  try {
    const create = client.feed("team", "brasil");
    console.log("create", create);
    return create;
  } catch (e) {
    console.log("ERROR >>>", e);
  }
};

createFeed().then((r) => console.log(r));
