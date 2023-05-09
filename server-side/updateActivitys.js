import serverClient from "./serverClient.js";

const updateActivity = async () => {
  try {
    const activity = {
      actor: "SU:Akarshan",
      // duration: "6.40ms",
      foreign_id: "User:17132",
      id: "4de49040-cee9-11ed-8080-80005ac58706",
      object: "Place:38140",
      origin: null,
      // target: ["user:maradona", "user:test2"],
      testField: "WE ARE a test, show me",
      time: "2023-03-30T10:54:54.788000",
      verb: "timeline",
      message: "Activity 3 updated by stream",
    };
    activity.verb = "UPDATE STREAM";
    // send the update to the APIs
    const update = await serverClient.updateActivities([activity]);
    return update;
  } catch (error) {
    console.log("error", error);
  }
};

updateActivity().then((r) => console.log(r));

// wait client.updateActivity({
//           actor: "SU:dawn-limit-2",
//           verb: "timeline",
//           foreign_id: "User:3985",
//           object: "Place:8897",
//           time: new Date().toISOString(),
//           message: "Activity 3 updated",

//           import serverClient from "./serverClient.js";

// const updateActivity = async () => {
//   try {
//     const activity = {
//       actor: "SU:Anders",
//       duration: "6.40ms",
//       foreign_id: "0.3419426442835476",
//       id: "a39cbe10-4e1d-11ed-8080-800072befdbe",
//       object: "test",
//       origin: null,
//       // target: ["user:maradona", "user:test2"],
//       testField: "WE ARE a test, show me",
//       time: "2022-10-17T13:14:32.433000",
//       verb: "UPDATE ON CREAM!!!!!!!!!!",
//     };
//     activity.verb = "UPDATE STREAM";
//     // send the update to the APIs
//     const update = await serverClient.updateActivities([activity]);
//     return update;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// updateActivity().then((r) => console.log(r));
// const activity = {
//   actor: "SU:83ebc09f-91f1-444e-8a20-49ac12068ae8",
//   duration: "6.40ms",
//   foreign_id: "60b97bc8-b96e-44e1-a911-2506308f89a8",
//   id: "707b9aaa-7a24-11ed-8080-800119137627",
//   object: "A TEST OBJECT FROM STREAM",
//   origin: null,
//   target: "everyone_flat:creme",
//   testField: "WE ARE a test, show me",
//   time: "2022-12-12T13:54:04.291345",
//   verb: "UPDATE ON CREAM!!!!!!!!!!",
// };

// duration: '1.04ms',
// results: [
//   {
//     actor: 'SU:83ebc09f-91f1-444e-8a20-49ac12068ae8',
//     foreign_id: '60b97bc8-b96e-44e1-a911-2506308f89a8',
//     id: '707b9aaa-7a24-11ed-8080-800119137627',
//     object: 'SO:recipe:7zzWVewhJuqjVXQcoxpTVj',
//     origin: null,
//     shareDescription: null,
//     shareImage: [Array],
//     shareTitle: 'Canelés de Bordeau',
//     target: '',
//     time: '2022-12-12T13:54:04.291345',
//     verb: 'UPDATE STREAM'
//   }
// ]
//  results: [
//    {
//      actor: "SU:83ebc09f-91f1-444e-8a20-49ac12068ae8",
//      foreign_id: "60b97bc8-b96e-44e1-a911-2506308f89a8",
//      id: "707b9ab2-7a24-11ed-8080-800119137627",
//      object: "SO:recipe:7zzWVewhJuqjVXQcoxpTVj",
//      origin: null,
//      shareDescription: null,
//      shareImage: [Array],
//      shareTitle: "Canelés de Bordeau",
//      target: "",
//      time: "2022-12-12T13:54:04.291345",
//      verb: "cooked",
//    },
//  ];
