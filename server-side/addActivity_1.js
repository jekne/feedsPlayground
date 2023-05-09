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
      object: "TEST OBJECT 1",
      // foreign_id: "1234",
      message: "Creating feed user:felix and targeting ",
      time: new Date().toISOString(),
    });
    return add;
  } catch (error) {
    console.log("error", error);
  }
};

addActivitys("felix").then((r) => console.log(r));
