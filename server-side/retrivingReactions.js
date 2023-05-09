import serverClient from "./serverClient.js";

// const readTimeline = async (userId) => {
//   try {
//     const jack = serverClient.feed("user", userId);
//     const results = await jack.get({ limit: 10 });
//     return results;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// readTimeline("johann").then((r) => console.log(r));

// Get activities from 5 to 10

const getActivities = async () => {
  try {
    const reactions = await serverClient.reactions.filter({
      activity_id: "b62d1f78-e997-11ed-8080-8000121b553c.like_2023-05-03",
    });

    return reactions;
  } catch (error) {
    console.log("error", error);
  }
};

getActivities().then((r) => console.log(r));

// await client.reactions.get(reactionId);

const getActivitiesByID = async (reactionId) => {
  try {
    const reactions = await serverClient.reactions.get(reactionId);

    return reactions;
  } catch (error) {
    console.log("error", error);
  }
};

// getActivitiesByID("d8ceb407-c094-4565-978d-1d9f6c299ae3").then((r) =>
//   console.log(r)
// );
