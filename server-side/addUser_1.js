// get or create a new user, if the user already exist the user is returned
import serverClient from "../server-side/serverClient.js";

const returnExistingUser = async (user_id) => {
  try {
    const get = serverClient.user(user_id).getOrCreate({
      name: "John Doe",
      occupation: "Software Engineer",
      gender: "male",
    });
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

returnExistingUser("johann").then((r) => console.log(r));
