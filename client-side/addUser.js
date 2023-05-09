import client from "./client.js";
import createToken from "../server-side/createToken.js";
const userId = "johann";
const token = createToken(userId);

//create a user
const createUser = async (userId) => {
  try {
    const create = client.user(userId, token).create({
      name: userId,
      occupation: "new_one",
      gender: "female",
    });
    console.log("TOKENNNNNN", token);
    return create;
  } catch (error) {
    console.log("error", error);
  }
};

// createUser("new_one").then((r) => console.log(r));

// get or create a new user, if the user already exist the user is returned

const returnExistingUser = async (userId) => {
  try {
    const get = client.user(userId).getOrCreate({
      name: "John Doe",
      occupation: "Software Engineer",
      gender: "male",
    });
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

returnExistingUser("new_one").then((r) => console.log(r));
