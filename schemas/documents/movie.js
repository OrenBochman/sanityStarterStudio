import person from './person'

export default {
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        required: true
      },
      {
        name:  'body',
        title: 'Description',  
        type:  'richText',
      },
      {
        name: 'director',
        title: 'Director',        
        type: 'reference',
        to: [{type: 'person'}],
        required: true,
      },
      {
        name: 'castMembers',
        title: 'Cast Members',
        type: 'array',
        of: [{type: 'person'}]
      }
    ],
    preview: {
      select: {
        title: 'title',
        director: 'director.lname' // if the movie has a director, follow the relation and get the name
      },
      prepare(selection) {
        const {title, director} = selection
        return {
          title: title,
          subtitle: `Directed by: ${director ? director : 'unknown'}`
      }
    }
  }
}