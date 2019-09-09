import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import styles from "styles/pages/naslovna.module.css";
import Carousel from "nuka-carousel";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "gatsby-image";


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
    
    const images = [
      
      {
        
        original: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/1024/0219906800_1_1_1.jpg?ts=1565706301614" ,
        thumbnail: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/1024/0219906800_1_1_1.jpg?ts=1565706301614"
      },
      {
        original: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/560/0219906800_2_3_1.jpg?ts=1565706234192",
        thumbnail: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/560/0219906800_2_3_1.jpg?ts=1565706234192"
      },
      {
        original: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/560/0219906800_2_4_1.jpg?ts=1565706246200",
        thumbnail: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/560/0219906800_2_4_1.jpg?ts=1565706246200"
      },
      {
        original: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/1024/0219906800_6_1_1.jpg?ts=1565706289635" ,
        thumbnail: "https://static.zara.net/photos///2019/I/0/1/p/0219/906/800/2/w/1024/0219906800_6_1_1.jpg?ts=1565706289635"
      },
    ];
    
    return (
      <>
      <SEO title="About" />
      <h1>About clothes</h1>
      
      <ImageGallery items={images} />
     <div className="buy">
      <h3>Crni kombinezon</h3>
      <h3>200 kn</h3>
      <h3>Šifra:1342</h3>
      <h3>Opis proizvoda:
          Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 
      </h3>
      <div className="choose-size">
      
      <button className="size">S</button>
      <button className="size">M</button>
      <button className="size">L</button>
      
      
      </div>
      
      <a href="/private/wish-items" ><div className="choose-size">
      <button className="wish">ADD TO WISH</button>
       </div></a>
     
      <a href="/private/shopping-bag" className="a-vise">
            <button className="add-button">ADD TO BAG</button>
          </a>
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