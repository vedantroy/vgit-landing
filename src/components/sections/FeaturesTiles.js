import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class FeaturesTiles extends React.Component {
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
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-tiles section center-content-mobile",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tiles-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="features-tiles-item-image mb-12 reveal-from-right"
                      data-reveal-container=".tiles-item"
                    >
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-01.svg")}
                        alt="Features tile icon 01"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4
                      className="mt-0 mb-8 reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="100"
                    >
                      Informative
                    </h4>
                    <p
                      className="m-0 text-sm reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="200"
                    >
                      Video docs complement comments by giving extra
                      information. Use your videos to point to specific lines
                      and give detailed explanations that provide additional
                      context behind the code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="features-tiles-item-image mb-12 reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="100"
                    >
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-02.svg")}
                        alt="Features tile icon 02"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4
                      className="mt-0 mb-8 reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="200"
                    >
                      Developer Native
                    </h4>
                    <p
                      className="m-0 text-sm reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="300"
                    >
                      <b>vdoc</b> allows you to tag commits and files with
                      videos, so it can fit into a git-based workflow.{" "}
                      <b>vdoc</b> leverages version control history in order to
                      delete out of date video-docs and ensure video docs are
                      associated properly when files are renamed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="features-tiles-item-image mb-12 reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="200"
                    >
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-03.svg")}
                        alt="Features tile icon 03"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4
                      className="mt-0 mb-8 reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="300"
                    >
                      Accessible
                    </h4>
                    <p
                      className="m-0 text-sm reveal-from-right"
                      data-reveal-container=".tiles-item"
                      data-reveal-delay="400"
                    >
                      With <b>vdoc</b>, all documentation for the current file
                      is accessible from the command line, so you don't need to
                      search an external wiki.
                    </p>
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
