import client from "./client.js";

// Get activities from 5 to 10

const getActivities = async (userId) => {
  try {
    const chris = client.feed("user", userId);
    const getAct = await chris.get({ limit: 5, offset: 0 }).then().catch();
    return getAct;
  } catch (error) {
    console.log("error", error);
  }
};
// getActivities("johann").then((r) => console.log(r));

// Get the 5 activities added after lastActivity
// you will gonna need the lastactivity (dashboard)

const getActAfterLastAct = async (userId) => {
  try {
    const carolina = client.feed("user", userId);
    const lastActivity = "faaf9f92-133a-11ed-a9f7-020c9b49a017";
    const get = await carolina
      .get({ limit: 5, id_lt: lastActivity.id })
      .then()
      .catch();
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};
// getActAfterLastAct("chris").then((r) => console.log(r));

// // Get the 5 activities added before lastActivity

const actBeforeLastAct = async (userId) => {
  try {
    const carolina = client.feed("user", userId);
    const lastActivity = "efcffa05-1402-11ed-a68c-0620fb2c09bb";
    const get = await carolina
      .get({ limit: 5, id_gt: lastActivity.id })
      .then()
      .catch();
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// actBeforeLastAct("carolina").then((r) => console.log(r));

// // Get activities sorted by rank (Ranked Feeds Enabled)
const sortedByRank = async (userId) => {
  try {
    const carolina = client.feed("user", userId);
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
    const carolina = client.feed("user", userId);
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

// retrieve two activities by ID

const byActivity = async () => {
  try {
    const response = await client.getActivities({
      ids: ["faaf9f92-133a-11ed-a9f7-020c9b49a017"],
    });
    return response;
  } catch (error) {
    console.log("error>>>", error);
  }
};

byActivity().then((r) => console.log(r));

// // retrieve two activities by their foreign ID and time
// const response = await client.getActivities({
//   foreignIDTimes: [
//     { foreignID: "like:1", time: "2018-07-08T14:09:36.000000" },
//     { foreignID: "post:2", time: "2018-07-09T20:30:40.000000" },
//   ],
// });
