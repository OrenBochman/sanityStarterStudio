// portableText.jsx
export const serializers = {
    type: {
      quote: ({ node: { text, author, url } }) => {
        return (
          <figure>
            <blockquote cite={url}>
              {text}
            </blockquote>
            {author && <figcaption>{author}</figcaption>}
          </figure>
        )
      }
    }
  }