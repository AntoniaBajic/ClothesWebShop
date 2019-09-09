import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";
import { PrivateRoute } from "components";






export default () => {
  const nav = navLinks.map(link => {
    if (link.private) {
      return (
        <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {link.text}
            </NavLink>
          )}
        />
      );
    }

    return (
      <NavLink key={link.path} to={link.path}>
        {link.text}
      </NavLink>
    );
  });

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Link to="/" className={styles.Logo}>
          INFASHION
        </Link>
        
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};
