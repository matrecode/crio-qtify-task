import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src={LogoImage} className="" alt="Logo" width={67} height={34} />
      </div>
    </>
  );
};

export default Logo;
