import serverClient from "./serverClient.js";

// Batch following many feeds
// Let timeline:1 will follow user:1, user:2 and user:3

const followManyFeeds = async () => {
  try {
    const follows = [
      {
        source: "timeline:test_12",
        target: "public:all",
        activity_copy_limit: 100,
      },
      // { source: "user:1", target: "user:2" },
      // { source: "user:1", target: "user:3", activity_copy_limit: 0 },
    ];

    const follow = await serverClient.followMany(follows);
    return follow;
  } catch (error) {
    console.log("error >>>", error);
  }
};

followManyFeeds().then((r) => console.log(r));
