import serverClient from "./serverClient.js";

const readTimeline = async (feedName_id) => {
  try {
    const feedToRetrieve = serverClient.feed("timeline", feedName_id);
    const results = await feedToRetrieve.get({ limit: 10 });
    return results;
  } catch (error) {
    console.log("error", error);
  }
};
readTimeline("b0eb2bd2-af5b-42f8-adfa-aef59bba6306").then((r) =>
  console.log(r)
);
