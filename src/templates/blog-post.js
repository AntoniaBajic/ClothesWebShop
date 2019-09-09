import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
