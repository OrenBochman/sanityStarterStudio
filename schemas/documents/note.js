import person from './person'

        //a type for holding 
        // notes - for use in  a Kanban, a Business model canvas, design sprint, brainstorm etc
        // should also be nice for use in, tickets etc.
        // consider adding 
        //  author, 
        //  metadata, 
        //  parent_container : 
        //     the note's context : sprint_id, kanban_id, location in mind map 

export default {
    description: "A post it note",
    title: "PostIt Note",      // This is the display name for the type
    name: "note",
    type: "document",
    fields: [

        {
          title: "Text",
          name: "text",
          type: "string",
          description: "the note",
        },
        {
          title: "context",
          name: "category",
          type: "reference",
          to : [{type: 'category'}], 
          description: "the context",
        },

      ],    preview: {
        select: {
          text: "text",
          context: "category.title",
        },
        prepare(selection) {
          const {text, context} = selection
          return {
            title: text,
            subtitle: `${context ? context : ''}`
        }
      }
    },
  }