import React from "react";

import { styles } from "../styles/Global";

import { Button } from "../buttons/Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }
          ${reverse ? styles.textRight : styles.textLeft}
          `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={` ${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                {showBtn && (
                  <Button
                    assetUrl={"google"}
                    link="Android Store"
                    info="App Store"
                  />
                )}
              </div>
              <div style={{ paddingLeft: 10 }}>
                {showBtn && (
                  <Button
                    assetUrl={"apple"}
                    link="Android Store"
                    info="Play Store"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? "fadeleftMini" : "fadeRightMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
