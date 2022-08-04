import serverClient from "./serverClient.js";

// Read Jack's timeline and Chris' post appears in the feed:

const readTimeline = async (userId) => {
  try {
    const jack = serverClient.feed("user", userId);
    const results = await jack.get({ limit: 10 });
    return results;
  } catch (error) {
    console.log("error", error);
  }
};
readTimeline("johann").then((r) => console.log(r));
