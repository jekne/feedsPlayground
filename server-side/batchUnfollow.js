import serverClient from "./serverClient.js";

// Batch unfollowing many feeds
// Let timeline:1 will follow user:1, user:2 and user:3

const unfollowing = async () => {
  try {
    const unfollows = [
      { source: "timeline:1", target: "user:1" },
      { source: "timeline:1", target: "user:2" },
      { source: "timeline:1", target: "user:3", keep_history: true },
    ];

    const unfollow = await serverClient.unfollowMany(unfollows);
    return unfollow;
  } catch (error) {
    console.log("error >>>", error);
  }
};

unfollowing().then((r) => console.log(r));
