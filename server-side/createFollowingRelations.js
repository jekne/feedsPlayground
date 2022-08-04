import serverClient from "./serverClient.js";

//On the dashboard: Jack will follows chris and on the side of chris he will be followed (followers) by jack but not following jack
const createFollowingRelations = async () => {
  try {
    const jack = serverClient.feed("another", "jack");
    const relations = await jack.follow("user", "chris");
    console.log(" relations ", relations);
    return relations;
  } catch (error) {
    console.log("error", error);
  }
};

createFollowingRelations().then((r) => console.log(r));
