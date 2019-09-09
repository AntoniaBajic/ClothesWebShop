import React from "react";
import SEO from "components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/pages/naslovna.module.css";
import Img from "gatsby-image";
import Carousel from "nuka-carousel";

export default ({ data: { naslovna, svaOdjeca,posts } }) => {
  const carousel = svaOdjeca.edges.map(element => {
    const id = element.node.id;
    const fluidImage = element.node.childImageSharp.fluid;
    return (
      <div key={id} className={styles.Carousel}>
        <Img fluid={fluidImage} />
      </div>
    );
    });

    const sliderConfig = {
      dots: false,
      infinite: false,
      speed: 750,
      slidesToScroll: 1,
      autoplay: false
    };

    return(
      <>
      <h2>Find your perfect outfit</h2>
      <div className="ap-container">
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title"> 
              <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                 
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                  
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                  
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title"> 
              <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                 
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title"> 
              <h3>Crni kombinezon</h3>
                <a href="/about" className="a-vise">
                 
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
  );
};
  export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    svaOdjeca: allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/naslovna/allClothes/" }
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
  }
`;
