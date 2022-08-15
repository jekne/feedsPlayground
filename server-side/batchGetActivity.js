import serverClient from "./serverClient.js";

// retrieve two activities by ID
const retrieveActivities = async () => {
  try {
    const response = await serverClient.getActivities({
      ids: [
        "da6dfa60-18b3-11ed-a18a-0a6b6fc19c49",
        "ed2837a6-0a3b-4679-adc1-778a1704852d",
      ],
    });
    return response;
  } catch (error) {
    console.log("error >>>", error);
  }
};

// retrieveActivities().then((r) => console.log(r));

// retrieve two activities by their foreign ID and time
const retrivingTwoAct = async () => {
  try {
    const response = await serverClient.getActivities({
      foreignIDTimes: [
        { foreignID: "johann", time: "2022-08-10T13:53:46.120663" },
        { foreignID: "post:2", time: "2018-07-09T20:30:40.000000" },
      ],
    });
    return response;
  } catch (error) {
    console.log("error >>>", error);
  }
};

retrivingTwoAct().then((r) => console.log(r));
