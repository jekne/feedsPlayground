import serverClient from "./serverClient.js";

// const readTimeline = async (userId) => {
//   try {
//     const jack = serverClient.feed("user", userId);
//     const results = await jack.get({ limit: 10 });
//     return results;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// readTimeline("johann").then((r) => console.log(r));

// Get activities from 5 to 10

const getActivities = async (userId) => {
  try {
    const chris = serverClient.feed("user", userId);
    const getAct = await chris.get({ limit: 5, offset: 0 }).then().catch();
    return getAct;
  } catch (error) {
    console.log("error", error);
  }
};
// getActivities("chris").then((r) => console.log(r));

// Get the 5 activities added after lastActivity
const getActAfterLastAct = async (userId) => {
  try {
    const carolina = serverClient.feed("user", userId);
    const get = await carolina
      .get({ limit: 5, id_lt: lastActivity.id })
      .then()
      .catch();
    return get;
  } catch (error) {
    // user1
    //   .get({ limit: 5, id_lt: lastActivity.id })
    //   .then(activitiesSuccess)
    //   .catch(activitiesError);
    console.log("error >>>", error);
  }
};
getActAfterLastAct("carolina").then((r) => console.log(r));

// // Get the 5 activities added before lastActivity

// user1
//   .get({ limit: 5, id_gt: lastActivity.id })
//   .then(activitiesSuccess)
//   .catch(activitiesError);

// // Get activities sorted by rank (Ranked Feeds Enabled)

// user1
//   .get({ limit: 20, ranking: "popularity" })
//   .then(activitiesSuccess)
//   .catch(activitiesError);

// // Get the 5 activities and enrich them with reactions and collections

// user1
//   .get({
//     limit: 20,
//     enrich: true,
//     reactions: { own: true, counts: true, recent: true },
//   })
//   .then(activitiesSuccess)
//   .catch(activitiesError);

// function activitiesSuccess(successData) {
//   console.log(successData);
// }

// function activitiesError(errorData) {
//   console.log(errorData);
// }
