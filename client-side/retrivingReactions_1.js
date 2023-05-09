import client from "./client.js";

const retrieveReactionById = async () => {
  try {
    // const reactions = await client.reactions.filter({
    //   kind: "like",
    // });

    const reactions = await client.reactions.get(
      "f3a62a08-e9a2-11ed-8080-8000121b553c.like_2023-05-03"
    );
    return reactions;
  } catch (error) {
    console.log("error", error);
  }
};

retrieveReactionById().then((r) => console.log(r));
