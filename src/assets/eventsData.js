const events = [
  {
    id: 1,
    name: "Sharuk",
    room: "Room A",
    startTime: `${new Date().getHours()}:00`,
    endTime: `${new Date().getHours() + 2}:00`,
    purpose: "Team Meeting",
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Swasthik",
    room: "Room B",
    startTime: `${new Date().getHours()}:00`,
    endTime: `${new Date().getHours() + 2}:00`,
    purpose: "Presentation",
    status: "Ongoing",
  },
  {
    id: 3,
    name: "James",
    room: "Room C",
    startTime: `${new Date().getHours() + 2}:00`,
    endTime: `${new Date().getHours() + 4}:00`,
    purpose: "Client Call",
    status: "Yet-to",
  },
  {
    id: 4,
    name: "Francis",
    room: "Room A",
    startTime: `${new Date().getHours() + 2}:00`,
    endTime: `${new Date().getHours() + 4}:00`,
    purpose: "Team Meeting",
    status: "Yet-to",
  },
];

export default events;
