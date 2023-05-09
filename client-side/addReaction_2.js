import client from "./client.js";

const addReactionFullExample = async () => {
  try {
    const response = await client.feed("user", "messy").get();
    console.log("RESPONSE >>>>>>>>>>>>>>", response);
    const activity = response.results[0];
    console.log("ACTIVITY >>>>>>>>>>>>>>", activity);

    const addLike = await client.reactions.add("like", activity.id);
    return addLike;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactionFullExample("92be44a4-813f-11ed-8ab2-0a6b6fc19c49").then((r) =>
  console.log(r)
);
