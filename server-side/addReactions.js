import serverClient from "./serverClient.js";
// // for server side auth, userId is required
// add a like reaction to the activity with id activityId

const addComment = async (userId) => {
  try {
    const activityId = "92be44a4-813f-11ed-8ab2-0a6b6fc19c49";
    const comment = await serverClient.reactions.add(
      "comment",
      activityId,
      { text: "A nice commenr" },
      { userId }
    );
    return comment;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addComment("chris").then((r) => console.log(r));
