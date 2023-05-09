import serverClient from "./serverClient.js";

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!

const addActivity = async (userId) => {
  try {
    const activities = [
      { actor: "player:zidane", verb: "foul", object: "player:ronaldo" },
      { actor: "User:2", verb: "watch", object: "Movie:1" },
    ];

    const carolina = serverClient.feed("timeline", userId);
    const addActivities = await carolina.addActivities(activities);
    // return addActivities;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addActivity("johann").then((r) => console.log(r));
