import serverClient from "./serverClient.js";

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
const addActivitys = async (userId) => {
  try {
    // feedgroup it is user and chris userID
    const chrisFeed = serverClient.feed("user", userId);
    // console.log("chris feed", chrisFeed);
    const add = await chrisFeed.addActivity({
      actor: userId,
      verb: "add",
      object: "picture:10",
      foreign_id: "picture:10",
      message: "Beautiful bird!",
    });
    return add;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
addActivitys("chris").then((r) => console.log(r));
