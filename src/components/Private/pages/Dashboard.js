import React from "react";
import SEO from "components/SEO";
import styles from "./styles.module.css";
import picture from "./image/picture.jpg"

export default () => (
  <>
    <SEO title="Shopping bag" />
    
    <form className={styles.LoginForm}></form>
    <h1>Your products in shopping bag</h1>
    <div className="card-dashboard">
      <div className="product">
        <img src={picture} className="product-image" />
        <div className="product-info">
        
          <h3>Crni kombinezon</h3>
          <h3>Količina: 1</h3>
        
        <h3>Cijena: 200 kn</h3>
        <h3>Veličina: S</h3>
        
        <input
        type="submit"
        className="buy-button"
        value={"BUY YOUR ITEM"}
        onClick={() => {
          alert(
            "You bought item. Details have been sent to Your e-mail address."
          );
        }}
        />
        
        </div>
      </div>
      <div className="product">
        <img src={picture} className="product-image" />
        <div className="product-info">
         
          <h3>Crni kombinezon</h3>
          <h3>Količina: 1</h3>
          <h3>Cijena: 200 kn</h3>
        <h3>Veličina: S</h3>
        <div className="buy">
        <input
        type="submit"
        className="buy-button"
        value={"BUY YOUR ITEM"}
        onClick={() => {alert("You bought item. Details have been sent to Your e-mail address."
          );
        }}
        />
        </div>     
      
        </div>
      </div>
      
      
    </div>
  </>
);

