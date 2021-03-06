import React from "react";
import HeroSplit from "../components/sections/HeroSplit";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Pricing from "../components/sections/Pricing";
import Cta from "../components/sections/Cta";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit imageFill className="illustration-section-01" />
        <FeaturesSplit
          invertMobile
          imageFill
          className="illustration-section-05"
        />
        <FeaturesTiles />
        <Pricing pricingSwitcher className="illustration-section-03" />
      </React.Fragment>
    );
  }
}

export default Home;
