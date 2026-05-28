import React from "react";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import { getDocPath, titleFromSlug } from "../../../util";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const Hero = ({ data, index }) => {
  const { siteConfig } = useDocusaurusContext();
  const title = data.title || siteConfig.title;
  const subtitle = data.subtitle || siteConfig.tagline;

  return (
    <header key={index} className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {data.document && (
          <div className={styles.buttons}>
            <Link className={styles.btnPrimary} to={getDocPath(data.document)}>
              {data.documentLabel || titleFromSlug(data.document)}
            </Link>
            <Link
              href="https://github.com/cbridges1"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              GitHub →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
