import client from "./client.js";

// Remove an activity by its id
// user1.removeActivity("ACTIVITY_ID");

const removeActivityById = async (ACTIVITY_ID) => {
  try {
    const carolina = client.feed("user", "johann");
    const remove = await carolina.removeActivity(ACTIVITY_ID);
    return remove;
  } catch (error) {
    console.log("error >>>", error);
  }
};

removeActivityById("cdd3ce10-1c8d-11ed-8080-800109acbe1a").then((r) =>
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

// removeActivityForeignID("picture:10").then((r) => console.log(r));
