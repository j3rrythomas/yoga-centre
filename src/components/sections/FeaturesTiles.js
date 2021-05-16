import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import icon1 from "./../../assets/images/feature-tile-icon-01.svg";
import icon2 from "./../../assets/images/feature-tile-icon-02.svg";
import icon3 from "./../../assets/images/feature-tile-icon-03.svg";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  reveal: false,
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  reveal,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader1 = {
    title: "Morning Session",
    paragraph:
      "For the early birds, who wish to start their day off on a relaxing tone.",
  };
  const sectionHeader2 = {
    title: "Evening Sessions",
    paragraph: "For the worker bees wanting to uwnind after a tiring day.",
  };
  const revealClass = classNames(reveal && "is-revealed");

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader1} className="center-content" />
          <div className={tilesClasses}>
            <div className={"tiles-item reveal-from-bottom  " + revealClass}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon1}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">5:30-6:30 AM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className={"tiles-item reveal-from-bottom " + revealClass}
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon2}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">6:30-7:30 AM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className={"tiles-item reveal-from-bottom  " + revealClass}
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon3}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">7:30-8:30 AM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <SectionHeader data={sectionHeader2} className="center-content" />
          <div className={tilesClasses}>
            <div className={"tiles-item reveal-from-bottom  " + revealClass}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon3}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">4:00-5:00 PM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className={"tiles-item reveal-from-bottom  " + revealClass}
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon2}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                      style={{ height: "65px" }}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">5:00-6:00 PM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>

            <div
              className={"tiles-item reveal-from-bottom  " + revealClass}
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon1}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">6:00-7:00 PM</h4>
                  {/* <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
