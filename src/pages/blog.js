import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import { BlogIndex } from "components";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <SEO title="Blog" />
      <h1>Blog posts</h1>
      <BlogIndex posts={posts} />
    </>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
