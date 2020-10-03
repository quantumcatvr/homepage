import React from 'react';
import classNames from 'classnames';
import {HashLink as Link } from 'react-router-hash-link';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="https://quantumcatvr.github.io">
          <Image
            src={require('./../../../assets/images/cat-logo.svg')}
            alt="Open"
            width={32}
            height={32} />
        </a>
      </h1>
    </div>
  );
}

export default Logo;
