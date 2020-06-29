import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Link } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class SignupForm extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "signin section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "signin-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
      title: "Download",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              tag="h1"
              data={sectionHeader}
              className="center-content"
            />
            <p
              className="center-content container-xs"
              style={{ marginBottom: "20px" }}
            >
              Clients available for Linux, Windows, and MacOS. Requires the git
              CLI to be installed.
            </p>
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="mt-24 mb-32">
                    <a
                      className="button button-primary button-block"
                      style={{ textTransform: `none` }}
                      href="/vdoc-linux-amd64"
                    >
                      Linux (x64)
                    </a>
                  </div>
                  <div className="mt-24 mb-32">
                    <a
                      className="button button-primary button-block"
                      style={{ textTransform: `none` }}
                      href="/vdoc-darwin-amd64"
                    >
                      MacOS (x64)
                    </a>
                  </div>
                  <div className="mt-24 mb-32">
                    <a
                      className="button button-primary button-block"
                      style={{ textTransform: `none` }}
                      href="/vdoc-windows-amd64.exe"
                    >
                      Windows (x64)
                    </a>
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

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;
