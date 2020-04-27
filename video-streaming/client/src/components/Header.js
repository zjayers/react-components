/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      Stream It Man
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
);

export default Header;
