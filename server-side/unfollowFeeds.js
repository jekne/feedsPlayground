import serverClient from "./serverClient.js";

//On the dashboard: Jack will stop to follow chris and will be erase the activity
const unfollowFeeds = async () => {
  try {
    const jack = serverClient.feed("timeline", "test_11");
    const relations = await jack.unfollow("public", "all");
    console.log(" relations ", relations);
    return relations;
  } catch (error) {
    console.log("error", error);
  }
};
// { source: "timeline:test_11", target: "public:all", keep_history: false },
unfollowFeeds().then((r) => console.log(r));

//unfollow keeping the history

const unfollowFeedsKeepHistory = async () => {
  try {
    const jack = serverClient.feed("another", "jack");
    const relations = await jack.unfollow("user", "chris", {
      keepHistory: true,
    });
    console.log(" relations ", relations);
    return relations;
  } catch (error) {
    console.log("error", error);
  }
};

// unfollowFeedsKeepHistory().then((r) => console.log(r));
