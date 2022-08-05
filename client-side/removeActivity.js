import client from "./client.js";

// Remove an activity by its id
// user1.removeActivity("ACTIVITY_ID");

const removeActivityById = async (ACTIVITY_ID) => {
  try {
    const carolina = client.feed("user", "carolina");
    const remove = await carolina.removeActivity(ACTIVITY_ID);
    return remove;
  } catch (error) {
    console.log("error >>>", error);
  }
};

removeActivityById("c1e3740c-13f5-11ed-841a-020c9b49a017").then((r) =>
  console.log(r)
);

// Remove activities foreign_id 'run:1'

const removeActivityForeignID = async (foreignId) => {
  try {
    const carolina = client.feed("user", "carolina");
    const remove = await carolina.removeActivity({
      foreignId: foreignId,
    });
    return remove;
  } catch (error) {
    console.log("error >>>", error);
  }
};

removeActivityForeignID("picture:10").then((r) => console.log(r));
