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
      foreign_id: "carolina01",
      message: "Beautiful bird!",
    });
    return add;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
addActivitys("stephen").then((r) => console.log(r));
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
