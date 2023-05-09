import serverClient from "./serverClient.js";

const readTimeline = async (userId) => {
  try {
    const jack = serverClient.feed("notification", userId);
    const results = await jack.get({ limit: 10 });
    return results;
  } catch (error) {
    console.log("error", error);
  }
};
readTimeline("Anders").then((r) => console.log(r));
