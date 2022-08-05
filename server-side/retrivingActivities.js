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
// getActivities("carolina").then((r) => console.log(r));

// Get the 5 activities added after lastActivity
// you will gonna need the lastactivity (dashboard)

const getActAfterLastAct = async (userId) => {
  try {
    const carolina = serverClient.feed("user", userId);
    const lastActivity = "efcffa05-1402-11ed-a68c-0620fb2c09bb";
    const get = await carolina
      .get({ limit: 5, id_lt: lastActivity.id })
      .then()
      .catch();
    return get;
  } catch (error) {
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
const sortedByRank = async (userId) => {
  try {
    const carolina = serverClient.feed("user", userId);
    const rank = await carolina
      .get({ limit: 20, ranking: "popularity" })
      .then(activitiesSuccess)
      .catch(activitiesError);
    return rank;
  } catch (error) {
    console.log("error >>>", error);
  }
};
// sortedByRank("carolina").then((r) => console.log(r));
// user1

// // Get the 5 activities and enrich them with reactions and collections
// with enrichement i am gonna receive all the data from the user
const enrichActivities = async (userId) => {
  try {
    const carolina = serverClient.feed("user", userId);
    const enrich = await carolina
      .get({
        limit: 20,
        enrich: true,
        reactions: { own: true, counts: true, recent: true },
      })
      .then()
      .catch();
    return enrich;
  } catch (error) {
    console.log("error >>>", error);
  }
};
// enrichActivities("carolina").then((r) => console.log(r));
// user1

// function activitiesSuccess(successData) {
//   console.log(successData);
// }

// function activitiesError(errorData) {
//   console.log(errorData);
// }

// enrichement:
// // {
//       actor: [Object],
//       foreign_id: 'picture:10',
//       id: 'a6361f05-13f4-11ed-969a-0620fb2c09bb',
//       latest_reactions: {},
//       latest_reactions_extra: {},
//       message: 'Beautiful bird!',
//       object: 'picture:10',
//       origin: null,
//       own_reactions: {},
//       reaction_counts: {},
//       target: '',
//       time: '2022-08-04T12:54:59.986612',
//       verb: 'add'
//     }

//normal output

//  {
//       actor: 'SU:carolina',
//       foreign_id: 'picture:10',
//       id: 'b8d1342f-13f5-11ed-840f-020c9b49a017',
//       message: 'Beautiful bird!',
//       object: 'activitiy 1',
//       origin: null,
//       target: '',
//       time: '2022-08-04T13:02:40.698680',
//       verb: 'add'
//     }
