import React from "react";
import SEO from "components/SEO";
import picture from "./image/picture.jpg"

export default () => (
  <>
    <SEO title="Personal" />
    <h1>Wish items</h1>
    <div className="card-dashboard">
      <div className="product">
        <img src={picture} className="product-image" />
        <div className="product-info">
          <h3>Crni kombinezon</h3>
   
        
        <h3>Cijena: 200 kn</h3>
    
        <div className="">
        <a href="/private/shopping-bag" className="a-vise">
        <button className="pay">ADD TO BAG</button>
        </a>
        <div className="a-vise">
        <input
        type="submit"
        className="pay2"
        value={"REMOVE"}
        onClick={() => {
          alert(
            "ITEM REMOVED!"
          );
        }}
        />
        </div>
        </div>
        </div>
      </div>
      <div className="product">
        <img src={picture} className="product-image" />
        <div className="product-info">
          <h3>Crni kombinezon</h3>
        
          <h3>Cijena: 200 kn</h3>
   
        <div className="">
        <a href="/private/shopping-bag" className="a-vise">
        <button className="pay">ADD TO BAG</button>
        </a>
        <div className="a-vise">
        <input
        type="submit"
        className="pay2"
        value={"REMOVE"}
        onClick={() => {
          alert(
            "ITEM REMOVED!"
          );
        }}
        />
        </div>
        </div>
        
        </div>
      </div>
      </div>
  </>
);
