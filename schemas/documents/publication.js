import person from './person'

export default {
    title: 'Publication',
    name: 'publication',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'About',
        name: 'about',
        type: 'text'
      },     
      {
        title: 'Abstract',
        name: 'abstract',
        type: 'text'
      },
      {
        title: 'Journal',
        name: 'journal',
        type: 'string'
      },
      {
        title: 'Series',
        name: 'series',
        type: 'string'
      },
      {
        title: 'Volume',
        name:  'volume',
        type:  'string'
      },
      {
        title: 'Issue',
        name:  'issue',
        type:  'string'
      },
      {
        title: 'Pages',
        name:  'pages',
        type:  'string'
      },
      {
        title: 'Cover',
        name:  'cover',
        type:  'image'
      },
      {
        title: 'DOI',
        name:  'doi',
        type:  'string'
      },
      {
        title: 'ISBN13',
        name: 'isbn13',
        type: 'string'
      },
      {
        title: 'ISSN',
        name:  'issn',
        type:  'string'
      }, 
      {
        title: 'License',
        name: 'licence',
        type: 'string'
      },     
      {
        title: 'Publisher',
        name: 'publisher',
        type: 'string'
      },     
      {
        title: 'Place',
        name: 'place',
        type: 'string'
      },
      {
        title: 'Year',
        name: 'year',
        type: 'number',
      },
      {
        title: 'Url',
        name: 'url',
        type: 'string',
      },
      {
        title: 'Authors',
        name: 'authors',
        type: 'array',
        of: [{
          type: 'reference',
          to: [{type: 'person'}]
        }]
      }
    ]
  }


