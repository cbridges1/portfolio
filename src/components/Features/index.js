import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Feature = ({ image, title, description }) => {
  return (
    <div className={clsx("col col--4")} style={{ marginBottom: "1rem" }}>
      <div className={styles.card}>
        {image && (
          <img className={styles.cardImage} src={image} role="img" alt="" />
        )}
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDesc}>{description}</p>}
      </div>
    </div>
  );
};

export const Features = ({ data, index }) => {
  return (
    <section key={index} className={styles.features}>
      <div className="container">
        <div className="row">
          {data.items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
