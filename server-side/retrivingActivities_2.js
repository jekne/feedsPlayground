import serverClient from "./serverClient.js";

const getActAfterLastAct = async (feedName) => {
  try {
    const lastActivity = "569a0150-d58a-11ed-8080-80003e601c5b";

    const feedToCheck = serverClient.feed("user", feedName);

    const get = await feedToCheck
      .get({ limit: 3, id_gte: lastActivity })
      .then()
      .catch();
    return get;
  } catch (error) {
    console.log("error >>>", error);
  }
};
getActAfterLastAct("a653b0a5-9f12-4cbc-8ff7-85312eca89d1").then((r) =>
  console.log(r)
);
