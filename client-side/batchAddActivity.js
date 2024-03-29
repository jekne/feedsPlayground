import client from "./client.js";

// Multiple activities can be added with a single batch operation.
const batchaddActivity = async (userId) => {
  try {
    const activities = [
      { actor: "User:1", verb: "tweet", object: "Tweet:1" },
      { actor: "User:2", verb: "watch", object: "Movie:1" },
    ];

    const selectedFeed = client.feed("user", userId);
    const addActivities = await selectedFeed.addActivities(activities);
    return addActivities;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// batchaddActivity("carolina").then((r) => console.log(r));

//This method allows you to add a single activity to multiple feeds with one API request.

const addActivity = async () => {
  try {
    const feeds = ["user:carolina", "user:jack", "user:chris"];
    const activity = {
      actor: "SU:2",
      verb: "pin",
      object: "Place:42",
      target: "Board:1",
    };
    const response = await client.addToMany(activity, feeds);
    return response;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addActivity().then((r) => console.log(r));
