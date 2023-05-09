import serverClient from "./serverClient.js";

const retrieveReactionById = async () => {
  try {
    const reactions = await serverClient.reactions.filter({
      activity_id: "b62d1f78-e997-11ed-8080-8000121b553c.like_2023-05-03",
    });

    return reactions;
  } catch (error) {
    console.log("error", error);
  }
};

retrieveReactionById().then((r) => console.log(r));
