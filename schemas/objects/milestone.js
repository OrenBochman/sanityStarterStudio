// The schema of the Milestone object-type
export default {

    title: "Milestone",
    name: "milestone",
    type: "object",
    fields: [
      {
        title: "Event",
        name: "event",
        type: "string"
      },
      {
        title: "Time",
        name: "time",
        type: "datetime"
      }
    ]
  }