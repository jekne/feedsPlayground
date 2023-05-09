import serverClient from "./serverClient.js";

// Multiple activities can be added with a single batch operation.
const batchaddActivity = async (userId) => {
  try {
    const activities = [
      { actor: "User:1", verb: "new test", object: "Tweet:1" },
      { actor: "User:2", verb: "new test", object: "Movie:1" },
    ];

    const carolina = serverClient.feed("timeline", userId);
    const addActivities = await carolina.addActivities(activities);
    return addActivities;
  } catch (error) {
    console.log("error >>>", error);
  }
};

batchaddActivity("johann").then((r) => console.log(r));
