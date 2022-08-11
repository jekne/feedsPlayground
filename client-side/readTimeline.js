import client from "./client.js";

// Read Jack's timeline and Chris' post appears in the feed:

const readTimeline = async (userId) => {
  try {
    const jack = client.feed("user", userId);
    const results = await jack.get({ limit: 10 });
    return results;
  } catch (error) {
    console.log("error", error);
  }
};
readTimeline("jack").then((r) => console.log(r));
