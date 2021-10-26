import { MdPerson } from "react-icons/md";

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      title: "Last Name",
      name: "lname",
      type: "string",
    },
    {
      title: "First Name",
      name: "fname",
      type: "string",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        //source: 'fname',
        source: doc => `${doc.fname}-${doc.lname}`,

        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type:  'figure',      
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText'
    },
    {
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Affiliation",
      name: "affiliation",
      type: "string",
    },
    {
      title: "e-mail",
      name: "email",
      type: "string",
    },
    
  ],
  preview: {
    select: {      
      title: 'lname',
      subtitle: 'fname',
      media: 'image',
    }
  }
}