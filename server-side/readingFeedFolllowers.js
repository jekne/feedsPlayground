import serverClient from "./serverClient.js";

// Read Jack's timeline and Chris' post appears in the feed:

const readFeedFollowers = async (user1) => {
  try {
    // List followers
    const response = await user1.followers({ limit: "10", offset: "10" });

    // const jack = serverClient.feed("user", userId);
    // const results = await jack.get({ limit: 10 });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
readFeedFollowers("johann").then((r) => console.log(r));
//
