import { useEffect } from "react";
import { Link } from "react-router";

import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";

    return () => (document.title = "Sobha Sector 36");
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
