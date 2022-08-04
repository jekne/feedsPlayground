import serverClient from "./serverClient.js";

const updateUser = async (userId) => {
  try {
    const update = await serverClient.user(userId).update({
      name: "Jane Doe",
      occupation: "Software Engineer",
      gender: "female",
    });
    return update;
  } catch (error) {
    console.log("error >>>", error);
  }
};

updateUser("jeronimo").then((r) => console.log(r));
