import React from "react";
import { graphql } from "gatsby";
import styles from "components/Private/Login/styles.module.css";


export default () => (
    <>
      
        <form className={styles.LoginForm}>
          <label>Enter your data:</label>
  
          <input
            autoFocus
            type="text"
            className={styles.LoginForm__input}
            placeholder="Name"
          />
  
          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Surname"
          />
          <input
            type="text"
            className={styles.LoginForm__input}
            placeholder="Email address"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Password"
          />
          <input
            type="password"
            className={styles.LoginForm__input}
            placeholder="Enter your password again"
          />
          <input
            type="delivery-address"
            className={styles.LoginForm__input}
            placeholder="Delivery address"
          />
          <input
            type="delivery-town"
            className={styles.LoginForm__input}
            placeholder="Delivery town"
          />
          <input
            type="credit-card-type"
            className={styles.LoginForm__input}
            placeholder="Type of credit card"
          />
          <input
            type="credit-card-name"
            className={styles.LoginForm__input}
            placeholder="Name on credit card"
          />
            <input
            type="credit-card-number"
            className={styles.LoginForm__input}
            placeholder="Number on credit card"
          />
  
          <input
            type="submit"
            className={styles.LoginForm__button}
            value={"Create an account"}
            onClick={() => {
              alert(
                "You sucessfuly registred."
                
              );
              
            }}
          />
          <label />
        </form>
      
    </>
  );