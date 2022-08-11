import client from "./client.js";

//On the dashboard: Jack will follows chris and on the side of chris he will be followed (followers) by jack but not following jack
const createFollowingRelations = async () => {
  try {
    const jack = client.feed("user", "rodrigo");
    const relations = await jack.follow("user", "chris");
    console.log(" relations ", relations);
    return relations;
  } catch (error) {
    console.log("error", error);
  }
};

createFollowingRelations().then((r) => console.log(r));
