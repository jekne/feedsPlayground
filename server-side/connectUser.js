import serverClient from "./serverClient.js";

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
const connectUser = async (userId) => {
  try {
    // feedgroup it is user and chris userID
    const feed = serverClient.feed("user", userId);

    const set = await serverClient.setUser({
      name: "xico",
      occupation: "Software Engineer",
      gender: "male",
      role: "admin",
    });

    return set;
  } catch (error) {
    console.log("error", error);
  }
};
// console.log(addActivity);
connectUser("xico").then((r) => console.log(r));
// const client = stream.connect(
//   "5aey8dvkzuhb",
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmFtZWxlc3MtcXVlZW4tMiJ9.e0WxpWQ8qjb26YJaEBBUHIfPBSbpMGljNCrx92OFtLU",
//   "1195643"
// );

// ensure the user data is stored on Stream
