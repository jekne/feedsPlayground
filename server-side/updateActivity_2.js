import serverClient from "./serverClient.js";

const updateActivity = async () => {
  try {
    const now = new Date();
    const activity = {
      actor: "teodoro",
      foreign_id: "1234",
      id: "338434a0-ed8c-11ed-8080-8001721c5dc3",
      message: "We are testing the time",
      object: "updating",
      origin: null,

      time: new Date().toISOString(),
      verb: "add",
    };
    activity.verb = "UPDATE STREAM";
    // send the update to the APIs
    const update = await serverClient.updateActivities([activity]);
    return update;
  } catch (error) {
    console.log("error", error);
  }
};

updateActivity().then((r) => console.log(r));
// const activity = {
//   id: "<ACTIVITY_ID>",
//   actor: "User:1",
//   verb: "post",
//   object: "tweet:1",
//   time: new Date().toISOString(),
//   tweet: "Hello, updated world!",
// };

// client
//   .feed("timeline", "<USER_ID>")
//   .updateActivity(activity)
//   .then((response) => {
//     console.log("Activity updated!", response);
//   })
//   .catch((error) => {
//     console.error("Error updating activity!", error);
//   });
