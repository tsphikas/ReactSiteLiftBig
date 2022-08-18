import React from "react";
import { styles } from "../styles/Global";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Button = ({ assetUrl, link, info }) => {
  const Icon = function () {
    let iconTest = 0;
    if (assetUrl === "google") {
      iconTest = (
        <div>
          <FaGooglePlay alt="download_link" className={styles.btnIcon} />
        </div>
      );
      return iconTest;
    } else if (assetUrl === "apple") {
      iconTest = (
        <div>
          <FaApple alt="download_link" className={styles.btnIconApple} />
        </div>
      );
      return iconTest;
    } else if (assetUrl === "email") {
      iconTest = (
        <div>
          <FaApple alt="download_link" className={styles.btnIconApple} />
        </div>
      );
    }
  };

  return (
    <div
      className={`${styles.btnBlack} flex`}
      onClick={() => window.open(link, "_blank")}
    >
      <Icon />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Download on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>{info}</p>
      </div>
    </div>
  );
};

const ContactButton = ({ link, info }) => {
  return (
    <div
      className={`${styles.btnSecondary} flex`}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col justify-start ml-4">
        <p className={`font-bold text-sm`}>{info}</p>
      </div>
    </div>
  );
};

export { Button, ContactButton };
