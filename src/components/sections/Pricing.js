import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import { Link } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";
import Switch from "../elements/Switch";
import Button from "../elements/Button";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false,
};

class Pricing extends React.Component {
  state = {
    priceChangerValue: "1",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["$", "55", "monthly"],
        1: ["$", "47", "annually"],
      },
      plan2: {
        0: ["$", "75", "monthly"],
        1: ["$", "67", "annually"],
      },
      plan3: {
        0: ["$", "109", "monthly"],
        1: ["$", "97", "annually"],
      },
    },
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? "1" : "0" });
  };

  getPricingData = (values, set) => {
    return set !== undefined
      ? values[this.state.priceChangerValue][set]
      : values[this.state.priceChangerValue];
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "pricing section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "pricing-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames(
      "tiles-wrap illustration-section-07",
      pushLeft && "push-left"
    );

    const sectionHeader = {
      title: "Simple pricing",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses} id="pricing-section">
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content invert-color"
            />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-scale-up">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2 text-color-low">
                          $
                        </span>
                        <span className="pricing-item-price-amount h1">0</span>
                      </div>
                      <div className="text-color-low text-xs">
                        /month, for individuals
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        What's included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">
                          Up to Ten, One Minute VideoDocs
                        </li>
                        <li className="is-checked">
                          Anyone can view VideoDocs
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Link
                      to="/signup"
                      className="button button-primary button-block"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-scale-up"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2 text-color-low">
                          $
                        </span>
                        <span className="pricing-item-price-amount h1">10</span>
                      </div>
                      <div className="text-color-low text-xs">
                        /month, for businesses
                      </div>
                      <Image
                        className="pricing-item-icon"
                        src={require("./../../assets/images/pricing-icon.svg")}
                        alt="Diamond"
                        width={38}
                        height={40}
                      />
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        What's included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Unlimited VideoDocs</li>
                        <li className="is-checked">
                          Max Five Minute VideoDoc Length
                        </li>
                        <li className="is-checked">Restrict VideoDoc Access</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Link
                      to="/signup"
                      className="button button-secondary button-block"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-scale-up"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-amount h1">
                          Custom Price
                        </span>
                      </div>
                      <div className="text-color-low text-xs">
                        /month, for enterprises
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        What's included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Unlimited VideoDocs</li>
                        <li className="is-checked">
                          Unlimited VideoDoc Length
                        </li>
                        <li className="is-checked">Restrict VideoDoc Access</li>
                        <li className="is-checked">On-Demand Support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Link
                      to="/signup"
                      className="button button-primary button-block"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
