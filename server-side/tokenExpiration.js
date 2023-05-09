import client from "./serverClient.js";

// const createToken = (userId) => client.createUserToken(userId);
// console.log("token", createToken("johann"));
// export default createToken;
//
// creates a token that expires in 1 hour using moment.js
// const timestamp = Number(moment().add("1h").format("X"));
// const token1 = client.createToken(userId, timestamp);
// console.log("token", token1(userId));
// // the same can be done with plain javascript
// const token2 = client.createToken('john', Math.floor(Date.now() / 1000) + (60 * 60));
import moment from "moment";

console.log(moment().format());

//get a user by his id
const createTokenExpiration = async (userId) => {
  try {
    const timestamp = Number(moment().add("1h").format("X"));
    console.log("timestanp", timestamp);
    const token1 = client.createToken(userId, timestamp);
    console.log("token", token1(userId));

    return token1;
  } catch (error) {
    console.log("error >>>", error);
  }
};

createTokenExpiration("new_one").then((r) => console.log(r));
