import {SiCodechef} from "react-icons/si"

export default {
    name: "chef",
    title: "Chef",
    type: "document",
    icon: SiCodechef,
    fields: [
      {
        name: "name",
        title: "Chef's Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "bio",
        title: "Bio",
        type: "array",
        of: [
          {
            title: "Block",
            type: "block",
            styles: [{ title: "Normal", value: "normal" }],
            lists: [],
          },
        ],
      },
    ],
  };