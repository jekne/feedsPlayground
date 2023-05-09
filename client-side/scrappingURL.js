import client from "./client.js";

const scrapping = async () => {
  try {
    const preview = await client.og("https://web.whatsapp.com/");

    return preview;
  } catch (error) {
    console.log("error >>>", error);
  }
};
scrapping().then((r) => console.log(r));
