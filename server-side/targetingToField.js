import serverClient from "./serverClient.js";

// Add the activity to Eric's feed and to Jessica's notification feed

const targeting = async (userId) => {
  try {
    const feed = serverClient.feed("user", userId);
    const activity = {
      actor: "user:Ryan",
      message: "@Jessica check out getstream.io it's awesome!",
      verb: "tweet",
      object: "tweet:id",
      to: ["notification:Jessica"],
      origin_field: "XXXXXX    DATA THAT I WAN TO SENT XXXXX",
    };
    const response = await feed.addActivity(activity);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
targeting("Ryan").then((r) => console.log(r));
