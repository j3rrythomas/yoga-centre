import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">Contact Us</Link>
        </li>
        {/* <li>
          <HashLink to="#about">About us</HashLink>
        </li> */}
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default FooterNav;
