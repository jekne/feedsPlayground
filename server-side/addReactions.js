import serverClient from "./serverClient.js";
// // for server side auth, userId is required
// add a like reaction to the activity with id activityId

const addComment = async (userId) => {
  try {
    const activityId = "1594bcd1-13f5-11ed-a68d-069d4b3df3d5";
    const comment = await serverClient.reactions.add(
      "comment",
      activityId,
      { text: "awesome post!" },
      { userId }
    );
    return comment;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addComment("chris").then((r) => console.log(r));
