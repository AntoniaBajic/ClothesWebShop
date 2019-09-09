import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

export default ({ className, children }) => (
  <div className={cn(className, styles.Container)}>{children}</div>
);
