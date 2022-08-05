import serverClient from "../server-side/serverClient.js";

//create a user
const createUser = async (userId) => {
  try {
    const create = serverClient.user(userId).create({
      name: userId,
      occupation: "Senior Developer",
      gender: "male",
    });
    return create;
  } catch (error) {
    console.log("error", error);
  }
};

createUser("ronaldo").then((r) => console.log(r));

// get or create a new user, if the user already exist the user is returned

const returnExistingUser = async () => {
  try {
    const get = serverClient.user("jeronimo").getOrCreate({
      name: "John Doe",
      occupation: "Software Engineer",
      gender: "male",
    });
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// returnExistingUser().then((r) => console.log(r));
