import serverClient from "./serverClient.js";

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
const createFeed = async (userId) => {
  try {
    // feedgroup it is user and chris userID
    const feed = serverClient.feed("user", userId);
    const activity = {
      actor: "User:maradona",
      verb: "A GAME ",
      object: "SOCCER HISTORY messy",
      testField: "A TEST BETWEEN maradona  AND  messy",
      foreign_id: "5678",
    };

    const create = await feed.addActivity(activity);
    return create;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
createFeed("new_one").then((r) => console.log(r));
