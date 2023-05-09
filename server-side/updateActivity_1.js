import serverClient from "./serverClient.js";

const updateActivityTarget = async () => {
  try {
    const feedToBeAdded = "user:maradona";
    const originalFeed = serverClient.feed("user", "Anders");
    const foreignId = "0.3419426442835476";
    const time = "2022-10-17T13:14:32.433000";

    const updateResponse = await originalFeed.updateActivityToTargets(
      foreignId,
      time,
      //   null,
      //   null,
      [feedToBeAdded]
    );
    console.log(JSON.stringify(updateResponse));

    return updateResponse;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
updateActivityTarget().then((r) => console.log(r));

// update the 'to' fields on an existing activity
// client.feed("user", "ken").function (foreign_id, timestamp, new_targets, added_targets, removed_targets)
// new_targets, added_targets, and removed_targets are all arrays of feed IDs
// either provide only the `new_targets` parameter (will replace all targets on the activity),
// OR provide the added_targets and removed_targets parameters
// NOTE - the updateActivityToTargets method is not intended to be used in a browser environment.
// feed.updateActivityToTargets(foreignID, timestamp, ["feed:1234"]); add a new one
// feed.updateActivityToTargets(foreignID, timestamp, null, ["feed:1234"]);
// feed.updateActivityToTargets(foreignID, timestamp, null, null, ["feed:1234"]); remove the feed to be add

// const feedToBeAdded = "everyone_flat:creme";
// const originalFeed = serverClient.feed(
//   "user_public",
//   "83ebc09f-91f1-444e-8a20-49ac12068ae8"
// );
// const foreignId = "60b97bc8-b96e-44e1-a911-2506308f89a8";
// const time = "2022-12-12T13:54:04.291345";

// const updateResponse = await originalFeed.updateActivityToTargets(
//   foreignId,
//   time,

//   [feedToBeAdded]
// );
// console.log(JSON.stringify(updateResponse));
