/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'richText'
 *  }
 */
export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
      {  type: 'block',             },
      {  type: 'bodyQuote',         },
      {  type: 'bodyImage',         },
      {  type: 'bodyImageCaption',  },
      {  type: 'code',              },
    //  {  type: 'markdown',      },
    ]
  }