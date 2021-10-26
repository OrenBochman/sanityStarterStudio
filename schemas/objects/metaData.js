export default {
    name: 'metaData',
    title: 'Metadata',
    type: 'object',
    fields: [
        {
            name: 'category',
            type: 'reference',
            to: [{ type: 'category'}],
            title: 'Category',
            options: {
              layout: 'tags',
           }
          },
          {
            name: 'keyword',
            type: 'array',
            of: [
                  { 
                    type: 'reference', 
                      to: [{ type: 'keyword'}]
                  }
                ],            
            title: 'Keywords',
            options: {
              layout: 'tags',
           }
          },
          //todo - add last changed, author, etc
        ]
}