import client from "./client.js";
import createToken from "../server-side/createToken.js";
const userId = "ronaldo";
const token = createToken(userId);

// // Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
// await chris.addActivity({
//   actor: "chris",
//   verb: "add",
//   object: "picture:10",
//   foreign_id: "picture:10",
//   message: "Beautiful bird!",
// });

//
const addActivitys = async () => {
  try {
    // feedgroup it is user and chris userID
    const chrisFeed = client.feed("user", "ronaldo", token);
    // console.log("chris feed", chrisFeed);
    const add = await chrisFeed.addActivity({
      actor: "SU:carolina",
      verb: "add",
      object: "activitiy 5",
      foreign_id: "picture:10",
      message: "Beautiful bird!",
    });
    return add;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
addActivitys().then((r) => console.log(r));

//If you want, you can add more Custom Fields like:

const activity = {
  actor: "User:1",
  verb: "run",
  object: "Exercise:42",
  course: { name: "Golden Gate park", distance: 10 },
  participants: ["Thierry", "Tommaso"],
  started_at: new Date(),
  foreign_id: "run:1",
  location: { type: "point", coordinates: [37.769722, -122.476944] },
};
