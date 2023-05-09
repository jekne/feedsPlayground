import client from "./serverClient.js";

const createToken = (userId) => client.createUserToken(userId);
console.log("token", createToken("johann"));
export default createToken;
//
