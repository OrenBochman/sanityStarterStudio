import { CgListTree } from "react-icons/cg";
//TODO: a tree view would be nice
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: CgListTree,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'parents',
      title: 'Parent categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
    {
      name: 'context',
      type: 'string',
      title: 'Context',
      description: 'To allow category hierarchies to be defined and used in different contexts'
    }
  ],
}
