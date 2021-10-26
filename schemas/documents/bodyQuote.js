// quote.js
export default {
    name: 'bodyQuote',
    type: 'document',
    title: 'Quote',
    fields: [
      {
        name: 'text',
        type: 'text', // <= This can also be a Portable Text field
        title: 'Text',
      },
      {
        title: 'Author',
        name:  'authors',
        type:  'reference',
        to: [{type: 'person'}]
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
        description: 'Source on the web', 
       },
       {
         name: 'keywords',
         description: 'Keywords',
         type: 'array' ,
         of: [{ type: 'string'}]
      },
      {
        name: 'page',
        description: 'Page',
        type: 'number',
      },
      {
        name: 'source',
        description: 'source',
         type: 'reference' ,
         to: [{type:'publication'}]
      }
    ]
  }