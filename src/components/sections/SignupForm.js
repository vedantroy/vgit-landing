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
      title: "Whoops! We're not quite finished",
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
              We're putting the finishing touches on VideoDoc. It should be
              ready soon! If you'd like us to send you a single reminder when
              we're ready, just put your email in below.
            </p>
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form>
                    <fieldset>
                      <div className="mb-12">
                        <Input
                          label="Full name"
                          placeholder="Full name"
                          labelHidden
                          required
                        />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Email"
                          labelHidden
                          required
                        />
                      </div>
                      <div className="mt-24 mb-32">
                        <Link
                          className="button button-primary button-block"
                          to="/reload"
                        >
                          Submit
                        </Link>
                      </div>
                    </fieldset>
                  </form>
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
