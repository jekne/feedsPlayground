import client from "./client.js";

// add a like reaction to the activity with id activityId

const addReactions = async (activityId) => {
  try {
    const like = await client.reactions.add("like", activityId, {});
    return like;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactions("1594bcd1-13f5-11ed-a68d-069d4b3df3d5").then((r) =>
  console.log(r)
);
