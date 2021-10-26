// bodyImage.js
export default {
    name: 'bodyImage',
    type: 'image',
    title: 'Image',
    fields: [
      {
        name: 'caption',
        type: 'bodyImageCaption',
      },
      {
        name: 'alt',
        type: 'string'
      }
    ]
  }