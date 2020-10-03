import React from 'react';
import classNames from 'classnames';
import {HashLink as Link } from 'react-router-hash-link';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#team">Team</Link>
        </li>
        <li>
          <Link to="#vrstory">VR Story and Art</Link>
        </li>
        <li>
          <a href="mailto:quantumcatvr@gmail.com">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
