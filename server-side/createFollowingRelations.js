import serverClient from "./serverClient.js";

//On the dashboard: Jack will follows chris and on the side of chris he will be followed (followers) by jack but not following jack
const createFollowingRelations = async () => {
  try {
    const jack = serverClient.feed("timeline", "Johann");
    const relations = await jack.follow("public", "all");
    console.log(" relations ", relations);
    return relations;
  } catch (error) {
    console.log("error", error);
  }
};

createFollowingRelations().then((r) => console.log(r));
//
