import client from "./client.js";

// add a like reaction to the activity with id activityId

const addComment = async (activityId) => {
  try {
    const comment = await client.reactions.add("comment", activityId, {
      text: "another like!!!!!!",
    });
    return comment;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addComment("92be44a4-813f-11ed-8ab2-0a6b6fc19c49").then((r) => console.log(r));
