import serverClient from "./serverClient.js";

//get a user by his id
const retrivingUsers = async (userId) => {
  try {
    const get = await serverClient.user(userId).get();
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

retrivingUsers("jeronimo").then((r) => console.log(r));
