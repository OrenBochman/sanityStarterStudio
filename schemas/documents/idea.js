import {RiLightbulbFlashLine} from "react-icons/ri"

export default {
    title: "Idea",
    name: "idea",
    type: "document",
    icon: RiLightbulbFlashLine,
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        title: "Image",
        name: "image",
        type: "figure",
      },
      {
        title: "Notes",
        name: "notes",
        type: "text",
      },
    ],
  };