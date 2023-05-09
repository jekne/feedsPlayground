import serverClient from "./serverClient.js";

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
const createFeed = async (userId) => {
  try {
    // feedgroup it is user and chris userID
    const feed = serverClient.feed("team", userId);
    const activity = {
      actor: "User:totti",
      verb: "A GAME ",
      object: "Player:petit",
      match: { name: "Italia game", id: 10 },
    };

    const create = await feed.addActivity(activity);
    return create;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
createFeed("italia").then((r) => console.log(r));
// actor: 'Player:Suarez',
// 	verb: 'foul',
// 	object: 'Player:Ramos',
// 	match: { name: 'El Clasico', id: 10 },
// 	to: ['team:barcelona', 'match:1'],
