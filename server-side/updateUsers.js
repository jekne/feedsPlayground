import serverClient from "./serverClient.js";

const updateUser = async (userId) => {
  try {
    const update = await serverClient.user(userId).update({
      name: "johann",
      occupation: "finance",
      gender: "male",
    });
    return update;
  } catch (error) {
    console.log("error >>>", error);
  }
};

updateUser("chris").then((r) => console.log(r));
