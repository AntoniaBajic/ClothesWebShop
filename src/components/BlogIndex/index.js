import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug } = post.node.frontmatter;
    return (
      <section key={id} className={styles.Post}>
        <h2 className={styles.Title}>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h2>
        <p className={styles.Excerpt}>{excerpt}</p>
        <span className={styles.Date}>{date}</span>
      </section>
    );
  });

  return postsList;
};
