import stream from "getstream";
// const stream = require("getstream");

// Initialize a Stream client with your API key and secret
const client = stream.connect(
  "yq8t3f8fb5ng",
  "wts2byby4zayxbzrp9ddvz9ffcmvpc2vs5e3zrjdckphut5c3c8h8zj989s663xh"
);

// Set the ID of the user and team
const user_id = "ronaldo";
const team_id = "brasil";

// Create the activity object
// const activity = {
//   actor: `User:${user_id}`,
//   verb: "post",
//   object: "some message",
//   to: [`timeline:${user_id}`, `team:${team_id}`],
// };

// Create the activity object
const activity = {
  actor: "Player:Suarez",
  verb: "foul",
  object: "Player:Ramos",
  match: { name: "El Clasico", id: 10 },
  to: [`USER:${user_id}`, `TEAM:${team_id}`],
};

// Add the activity to the user's timeline feed
client.feed("timeline", user_id).addActivity(activity);

// Add the same activity to the team feed
client.feed("team", team_id).addActivity(activity);

// Notify all users in the same team about the new activity
const teamFeed = client.feed("team", team_id);

// Retrieve all followers of the team feed
teamFeed
  .followers()
  .then((response) => {
    // Get the IDs of all users in the team
    const user_ids = response.results.map(
      (follower) => follower.feed_id.split(":")[1]
    );

    // Create a notification activity for each user
    const notificationActivities = user_ids.map((uid) => {
      return {
        actor: `User:${user_id}`,
        verb: "notification",
        object: "new activity",
        to: [`notification:${uid}`],
      };
    });

    // Add the notification activities to the user's notification feeds
    const batch = client.batch();
    notificationActivities.forEach((activity) => {
      batch.addActivity(activity);
    });
    batch.run();
  })
  .catch((err) => console.error(err));
