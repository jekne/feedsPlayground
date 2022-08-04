import serverClient from "./serverClient.js";

// Remove an Activity by referencing it's Foreign Id:
//when i do this, i erase all the feeds related to this foreignId

const removeActivity = async () => {
  try {
    const chris = serverClient.feed("user", "chris");
    const remove = await chris.removeActivity({ foreignId: "picture:10" });
    return remove;
  } catch (error) {
    console.log("error", error);
  }
};

removeActivity().then((r) => console.log(r));
