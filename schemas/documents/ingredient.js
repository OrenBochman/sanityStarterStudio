import {GiOpenedFoodCan} from "react-icons/gi"

export default {
    title: "Ingredient",
    name: "ingredient",
    type: "document",
    icon: GiOpenedFoodCan,
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        title: "Image",
        name: "image",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        title: "Notes",
        name: "notes",
        type: "text",
      },
    ],
  };