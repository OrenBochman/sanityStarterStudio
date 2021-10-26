// faq.js
export default {

    name: 'bioWorkEntry',
    type: 'object',
    title: 'Work Entry',
    fields: [
      {
        name: 'institution',
        type: 'text',
        title: 'Institution'
      },
      {
        name: 'Title',
        type: 'string',
        title: 'title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'start',
        type: 'date',
        title: 'Start',
      },
      {
        name: 'end',
        type: 'date',
        title: 'End',
      },

    ]
  }