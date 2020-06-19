import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "Documentation for the Modern Age",
      paragraph:
        "vgit automatically maps documentation to code, so you can easily find relevant information when developing.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Easily Generate Documentation</h3>
                  <p className="m-0">
                    Record a explanatory video of your code and automatically
                    associate it with set of commit(s) / file(s) for future contributors
                    to find.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-03",
                    imageFill && "split-item-image-fill"
                  )}
                >
                  <Image
                    src={require("./../../assets/images/carbon.svg")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Quickly Understand Code</h3>
                  <p className="m-0">
                    A better <code>git blame</code>. Find all relevant videos that are
                    associated with a chunk of code. VideoDoc discards old videos and tracks
                    file renames across commits, so you only get relevant results.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-04",
                    imageFill && "split-item-image-fill"
                  )}
                >
                  <Image
                    src={require("./../../assets/images/get_video_docs.svg")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
