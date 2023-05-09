import serverClient from "./serverClient.js";

const getOneActivitiById = async () => {
  try {
    const response = await serverClient.getActivities({
      ids: ["1629b280-ed88-11ed-8080-8000614b8e15"],
    });

    return response;
  } catch (e) {
    console.log("error >>>", e);
  }
};
getOneActivitiById().then((r) => console.log(r));
