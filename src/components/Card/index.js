import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export const Card = ({ title, icon, href, horizontal, color, children }) => {
  const inner = (
    <>
      {icon && (
        <div className={styles.cardIcon} style={color ? { color } : {}}>
          {icon}
        </div>
      )}
      <div>
        <div className={styles.cardTitle}>{title}</div>
        {children && <div className={styles.cardBody}>{children}</div>}
      </div>
    </>
  );

  const className = clsx(
    styles.card,
    horizontal && styles.horizontal,
    color && styles.accented,
  );

  const style = color ? { "--card-accent": color } : {};

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={className} style={style}>
      {inner}
    </div>
  );
};

export const CardGroup = ({ cols = 2, children }) => {
  return (
    <div className={clsx(styles.cardGroup, cols === 3 ? styles.cols3 : styles.cols2)}>
      {children}
    </div>
  );
};
