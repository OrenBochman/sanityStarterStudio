// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent';

// localization
import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

// general
import projectPortableText from './objects/projectPortableText';
import simplePortableText from './objects/simplePortableText';
import figure from './objects/figure';
import bodyQuote from './documents/bodyQuote';

// citations & cvs
import person from './documents/person';
import publication from './documents/publication';

import bio from './documents/bio';
import bioEducationEntry from './objects/bioEducationEntry';
import bioWorkEntry from './objects/bioWorkEntry';
import bioPortableText from './objects/bioPortableText';

//post
import post from './documents/post';

// media library
import movie from './documents/movie';

// metadata
import metaData from './objects/metaData';
import category from './documents/category';
import keyword from './documents/keyword';
import bookmark from './documents/bookmark';

// e-commerce
import productVariant from './objects/productVariant';
import product from './documents/product';
import vendor from './documents/vendor';

// business model canvas
import note from './documents/note';
import bmc from './documents/bmc';

import idea from './documents/idea';

// help article with faq
import faq from './objects/faq'
import helpArticle from './documents/help-article';

// project portfolio
import projectMember from './objects/projectMember';
import sampleProject from './documents/sampleProject';
import siteSettings from './documents/siteSettings';

import milestone from './objects/milestone';

import bodyImage from './objects/bodyImage';
import bodyImageCaption from './objects/bodyImageCaption';
import portableText from './objects/portableText';
import richText from './objects/richText';

// recipe - should also be tech recipes
import recipe from './documents/recipe';
import chef from './documents/chef';
import ingredient from './documents/ingredient';
// todo: add techniques
// todo: add requirements
// todo: add nutrition data & costs data

// events 
import event from './documents/event';
import venue from './documents/venue';
import organizer from './documents/organizer';
// todo: consider adding support and integration
// registration, check-ins, event-program, program-planning, call for papers, 
// videos streams, code labs, live coding, presentations
// voting, quizzes, information spaces, 
// virtual collaborations (white board, virtual space, call scheduling, chat )

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    idea,
    bio,
    bmc,    
    publication,
    product,
    person,
    vendor,
    category,
    keyword,
    bookmark,
    recipe,
    chef,
    ingredient,
    event,
    venue,
    organizer,
    helpArticle,
    sampleProject,
    siteSettings,
    bodyQuote,
    movie,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    note,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    bioPortableText,
    projectPortableText,
    portableText,
    simplePortableText,
    projectMember,
    figure,
    bioEducationEntry,
    bioWorkEntry,
    milestone,
    faq,
    bodyImage,
    bodyImageCaption,
    richText,
    metaData,
  ]),
})
