import {BsKanban} from "react-icons/bs"
import {BsTruck} from "react-icons/bs"

BsTruck
//import bioEducationEntry from './bioEducationEntry'
//import bioWorkEntry from './bioWorkEntry'

export default {
    description: "Business Model Canvas",
    title: 'Canvas',      // This is the display name for the type
    name: 'canvas',
    type: 'document',
    icon: BsKanban,
    fields: [  
        
        // client 
        {
            title: 'Designed For',
            description: 'Client',
            name:  'designedFor',
            type:  'string',
        }, 
        // author 
        {
            title: 'Designed By',
            description: 'Who created this canvas',
            name:  'designedBy',
            type:  'array',
            of: [{type: 'reference', to: [{type: 'person'}], }],
           
        },
        // version
        {
            title: 'Version',
            description: 'Version',
            name:  'version',
            type:  'string',
        }, 


        // 1. Customer Segment 
        {
            title: 'Customer Segments',
            description: 'List the top three segments. Look for the segments that provide the most revenue.',
            name:  'segment',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 2. Value Proposition
        {
            title: 'Value Proposition',
            description: 'What are your products and services? What is the job you get done for your customer?',
            name:  'proposition',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 3. Revenue Streams
           {
            title: 'Revenue Streams',
            description: ' List your top three revenue streams. If you do things for free, add them here too.',
            name:  'revenue',
            type:  'array',
            of: [{type: 'note'}],
        },
        // 4. Channels 
        {
            title: 'Channels',
            description: 'How do you communicate with your customer? How do you deliver the value proposition?',
            name:  'channel',
            type:  'array',
            icon: BsTruck,
            of: [{type: 'note'}],
        }, 
        // 5. Customer Relationships 
        {
            title: 'Customer Relationships',
            description: 'How does this show up and how do you maintain the relationship?',
            name:  'relations',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 6. Key Activities
        {
            title: 'Key Activities',
            description: ' What do you do every day to run your business model?',
            name:  'activity',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 7. Key Resources 
        {
            title: 'Key Resources',
            description: 'The people, knowledge, means, and money you need to run your business.?',
            name:  'resource',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 8. Key Partners
        {
            title: 'Key Partners',
            description: 'List the partners that you can’t do business without (not suppliers).',
            name:  'partner',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 9. Cost Structure 
        {
            title: 'Cost Structure',
            description: 'List your top costs by looking at activities and resources?',
            name:  'cost',
            type:  'array',
            of: [{type: 'note'}],
        }, 
        // 10. Notes 
        {
            title: 'Notes',
            description: 'notes on this model',
            name:  'notes',
            type:  'markdown',            
        }, 

    ],
    preview: {
        select: {
          title: "designedFor",
          subtitle: "version",
          media: "image",
        },
  }
}