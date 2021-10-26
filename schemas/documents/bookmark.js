import { CgListTree } from "react-icons/cg";
//TODO: a tree view would be nice
export default {
  description: 'collaborative bookmark sharing',
  name: 'bookmark',
  title: 'Bookmark',
  type: 'document',
  icon: CgListTree,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'url',
      name: 'address',
      title: 'Address',
    },
    {
      type: 'number',
      title: 'Rating',
      name: 'rating',
      //validate to do number from 1-5
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
      name: 'note',
      title: 'Note',
      type: 'text',
    },
    {
      name: 'category',
      type: 'reference',
      to : [
        {type:'category'}
      ],
    },
    {
      name: 'keywords',
      title: 'Keywords',

      type: 'array',
      of : [{type:'keyword'}],
    },
  ],
}
