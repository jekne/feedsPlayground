import client from "./client.js";

const removeUser = async (userId) => {
  try {
    const remove = await client.user(userId).delete();
    return remove;
  } catch (error) {
    console.log("error >>>", error);
  }
};

removeUser("jeronimo").then((r) => console.log(r));
