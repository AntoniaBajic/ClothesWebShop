import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/pages/naslovna.module.css";
import FilteredPosts from "components/FilteredPosts";
import Layout from "components/Layout";
import Img from "gatsby-image";

export default ({ data: { naslovna, slikeNaslovna,posts } }) => {
  const carousel = slikeNaslovna.edges.map(element => {
    const id = element.node.id;
    const fluidImage = element.node.childImageSharp.fluid;
    return (
      <div key={id} className={styles.Carousel}>
        <Img fluid={fluidImage} />
      </div>
    );
    });

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      
      <SEO keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.ResponsiveSmall}>
        <Slider {...sliderConfig} slidesToShow={1}>
          {carousel}
        </Slider>
      </div>

      <div className={styles.ResponsiveNormal}>
        <Slider {...sliderConfig} slidesToShow={2}>
          {carousel}
        </Slider>
      </div>

      
      <a href="/clothes" className="a-vise-2">
          <button className="vise-button">MORE</button>
        </a>
       

      <FilteredPosts posts={posts} />
      
      <a href="/blog" className="a-vise-2">
          <button className="vise-button">MORE</button>
        </a>
      
    </>
  );
};

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }
    slikeNaslovna: allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/naslovna/index/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  maxHeight: 260
                  cropFocus: NORTH
                  traceSVG: { color: "#663399" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
