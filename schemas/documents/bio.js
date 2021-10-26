//import bioEducationEntry from './bioEducationEntry'
//import bioWorkEntry from './bioWorkEntry'

export default {
    description: "A biographic entry",
    title: "Biography",      // This is the display name for the type
    name: "biography",
    type: "document",
    fields: [  
        {
            title: 'Author',
            name:  'authors',
            type:  'reference',
            to: [{type: 'person'}]
        },
        {
          title: "Biography",
          name: "body",
          type: "markdown",
          description: "A Github flavored markdown field with image uploading",
    
        },
        {
          title: "Education",
          name:  "education",
          type:  "array",
          of: [
            {type: "bioEducationEntry"},
          ]
        },
        {
          title: "Work History",
          name:  "work",
          type:  "array",
          of: [
            {type: "bioWorkEntry"},
          ]
        },        
        {
          title: "Publications",
          name:  "publications",
          type:  "array",
          of: [
            {type: "publication"},
          ]
        },
        {
          title: "Interests",
          name: "interests",
          type: "array",
          of: [
            {type: "string"},
          ]
        },
      ]
  }