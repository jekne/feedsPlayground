import client from "./client.js";

// Read Jack's timeline and Chris' post appears in the feed:

const readTimeline = async (userId) => {
  try {
    const getFeed = client.feed("user", userId);
    const results = await getFeed.get({ limit: 10 });
    return results;
  } catch (error) {
    console.log("error", error);
  }
};

readTimeline("jack").then((r) => console.log(r.results[5]));

/// in order to see the object see results
