import serverClient from "./serverClient.js";

// Remove an Activity by referencing it's Foreign Id:
//when i do this, i erase all the feeds related to this foreignId

const removeActivity = async () => {
  try {
    const feed = serverClient.feed("timeline", "Akarshan");
    const remove = await feed.removeActivity({
      foreignId: "79d2d700-cefa-11ed-8080-80003d2dd851",
    });
    return remove;
  } catch (error) {
    console.log("error", error);
  }
};

removeActivity().then((r) => console.log(r));
