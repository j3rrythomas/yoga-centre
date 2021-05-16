import React from "react";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";
import Image from "../../elements/Image";
import logo from "./../../../assets/images/logo.svg";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <HashLink smooth to="/#top">
          <Image src={logo} alt="Open" width={256} height={30} />
        </HashLink>
      </h1>
    </div>
  );
};

export default Logo;
