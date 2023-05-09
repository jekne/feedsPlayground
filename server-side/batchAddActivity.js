import serverClient from "./serverClient.js";

// Multiple activities can be added with a single batch operation.

//This method allows you to add a single activity to multiple feeds with one API request.

const addActivity = async () => {
  try {
    const feeds = ["timeline:johann", "another:johann"];
    const activity = {
      actor: "User:2",
      verb: "pin",
      object: "Place:42",
      // target: "Board:1",
      // foreignId: "johann", running a test
    };
    const response = await serverClient.addToMany(activity, feeds);
    return response;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addActivity().then((r) => console.log(r));
