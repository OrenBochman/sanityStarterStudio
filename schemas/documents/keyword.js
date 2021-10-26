import { CgListTree } from "react-icons/cg";
//TODO: a tree view would be nice
export default {
  name: 'keyword',
  title: 'Keyword',
  type: 'document',
  icon: CgListTree,
  fields: [
    {
      name: 'keyword',
      title: 'Keyword',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'keyword',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ],
}
