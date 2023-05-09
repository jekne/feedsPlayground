import serverClient from "./serverClient.js";

// Read Jack's timeline and Chris' post appears in the feed:

const readTimeline = async (userId) => {
  try {
    // Read Scott's notification feed
    const scott = serverClient.feed("notification", "Anders");
    const notifications = await scott.get({ limit: 10 });
    console.log("The notification >>>", notifications.results);

    return notifications;
  } catch (error) {
    console.log("error", error);
  }
};
readTimeline("johann").then((r) => console.log(r));
//
