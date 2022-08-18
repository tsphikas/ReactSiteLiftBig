import { Download, Features, SectionWrapper, NavBar } from "../src/components";
import { styles } from "./styles/Global";
import assets from "./assets";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route end to="/" />
        </Routes>

        <SectionWrapper
          title="Lift Big"
          description="Focus on your lifting. No need for maths between sets. Let all the thinking and planing be done for you. Simple and easy to use. Just choose your workout program and begin."
          showBtn
          mockupImg={assets.group1}
          banner="banner"
        />
        <SectionWrapper
          title="LiftBig Includes Popular Strength Training Routines"
          description="We're actively adding new workout programs to help you achieve your goals. Currently choose between StrongLifts, MadCow and The Complete Bodyweight Workout."
          mockupImg={assets.homeCards}
          reverse
        />
        <Features />
        <SectionWrapper
          title="Deployment"
          description="Description of app"
          mockupImg={assets.feature}
          reverse
        />
        <SectionWrapper
          title="Creative way to showcase"
          description="Description of app some more bs"
          mockupImg={assets.mockup}
          banner="banner02"
        />
        <Download />

        <div className="banner04 pt-8 pb-0.5">
          <div
            className="              
          justify-center
          items-center
          flex-col
          text-center my-3"
          >
            <p className={`${styles.footerText} ${styles.whiteText}`}>
              Designed & Built by {""}
              <span className="bold">Theodoros Sphikas</span>
            </p>
            <p className={`${styles.footerText} ${styles.whiteText}`}>
              <a className="bold" href="mailto:tsphikas@gmail.com">
                tsphikas@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
