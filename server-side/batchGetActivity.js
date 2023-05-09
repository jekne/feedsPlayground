import serverClient from "./serverClient.js";

// retrieve two activities by their foreign ID and time

const retrivingActivity = async () => {
  try {
    const response = await serverClient.getActivities({
      foreignIDTimes: [
        {
          foreignID: "60b97bc8-b96e-44e1-a911-2506308f89a8",
          time: "2022-12-12T13:54:04.291345",
        },
        // { foreignID: "post:2", time: "2018-07-09T20:30:40.000000" },
      ],
    });
    return response;
  } catch (error) {
    console.log("error >>>", error);
  }
};

retrivingActivity().then((r) => console.log(r));
