import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  // In a real application, you would fetch the blog post data based on the id
  const blogPost = {
    title: `Blog Post ${id}`,
    content: 'This is a placeholder for the blog post content. In a real application, you would fetch this content from a database or API based on the blog post id.'
  };

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default BlogPost;


