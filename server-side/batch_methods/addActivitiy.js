import serverClient from "../serverClient.js";

import createToken from "../createToken.js";
const userId = "Jack";
const token = createToken(userId);
dotenv.config({ path: "./.env" });
console.log(serverClient);
const addActivity = async (userId) => {
  try {
    const activities = [
      { actor: "User:1", verb: "tweet", object: "Tweet:1" },
      { actor: "User:2", verb: "watch", object: "Movie:1" },
    ];

    const carolina = serverClient.feed("user", userId);
    const addActivities = await carolina.addActivities(activities);
    return addActivities;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// addActivity("carolina").then((r) => console.log(r));
