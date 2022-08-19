import React from "react";
import { styles } from "../styles/Global";
import assets from "../assets";
import { ContactButton } from "../buttons/Button";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Contact Us</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Request a feature, tell us how we can improve your experoence, or
            report a bug. Whatever you need we're here to help. All messages
            will be read and replied to.
          </p>
        </div>
        <ContactButton
          className={`${styles.btnSecondary} text-white`}
          link="mailto:tsphikas@gmail.com"
          info="Say Hello"
        ></ContactButton>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default Download;
