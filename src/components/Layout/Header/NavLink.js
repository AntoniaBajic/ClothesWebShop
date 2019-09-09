import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import cn from "classnames";

export default ({ children, className, activeClassName, ...rest }) => (
  <Link
    className={cn(styles.NavLink, className)}
    activeClassName={activeClassName ? activeClassName : styles.NavLink_active}
    {...rest}
  >
    {children}
  </Link>
);
