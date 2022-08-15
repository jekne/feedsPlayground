import client from "./client.js";

//get a user by his id
const retrivingUsers = async (userId) => {
  try {
    const get = await client.user(userId).get();
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

retrivingUsers("johann").then((r) => console.log(r));
