import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
          <Link to="#vrstory">VR Storyand Art</Link>
        </li>
        <li>
          <a href="mailto:quantumcatvr@gmail.com">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
