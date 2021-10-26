// faq.js
export default {

    name: 'bioEducationEntry',
    type: 'object',
    title: 'Education Item',
    fields: [
      {
        name: 'institution',
        type: 'text',
        title: 'Institution'
      },
      {
        name: 'certificate',
        type: 'text',
        title: 'Certificate',
      },
      {
        name: 'subject',
        type: 'text',
        title: 'Subject',
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