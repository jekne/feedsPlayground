import client from "./client.js";

const collectionsUsers = async () => {
  try {
    const feed = client.feed("user", "jack");
    await client.setUser({ name: "Jack" });

    const post = await client.collections.add(
      "post",
      "42-ways-to-improve-your-feed",
      { text: "..." }
    );

    const add = await feed.addActivity({
      actor: client.currentUser,
      verb: "post",
      object: post,
    });
    return add;
  } catch (error) {
    console.log("error >>> ", error);
  }
};
collectionsUsers().then((r) => console.log(r));

// if we now read Jack's feed we will get the enriched data automatically
// const response = await feed.get({ enrich: true });
// console.log(response);

// you can also update Jack's post and get the new version automatically propagated to his feed and its followers
// await client.collections.update("post", "42-ways-to-improve-your-feed", {
//   text: "new version of the post",
// });

// jack's feed now has the new version of the data
// const data = await feed.get({ enrich: true });
// console.log(data);
