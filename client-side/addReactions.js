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

// addReactions("1594bcd1-13f5-11ed-a68d-069d4b3df3d5").then((r) =>
//   console.log(r)
// );

// // adds a comment reaction to the activity with id activityId

const addComment = async (activityId) => {
  try {
    const comment = await client.reactions.add("comment", activityId, {
      text: "awesome post!",
    });
    return comment;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// addComment("a1dcd775-13ef-11ed-9c8d-0a6b6fc19c49").then((r) => console.log(r));

const addReactionFullExample = async () => {
  try {
    const response = await client.feed("user", "carolina").get();
    console.log("RESPONSE >>>>>>>>>>>>>>", response);
    const activity = response.results[0];
    console.log("ACTIVITY >>>>>>>>>>>>>>", activity);

    const addLike = await client.reactions.add("like", activity.id);
    return addLike;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactionFullExample("a1dcd775-13ef-11ed-9c8d-0a6b6fc19c49").then((r) =>
  console.log(r)
);
