import client from "./client.js";

const updateUsers = async (userId) => {
  try {
    const update = await client.user(userId).update({
      name: userId,
      occupation: "Software Engineer",
      gender: "female",
    });
    return update;
  } catch (error) {
    console.log("error >>>", error);
  }
};

updateUsers("ronaldo").then((r) => console.log(r));
