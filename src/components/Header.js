import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ branding }) => {
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

Header.defaultProps = {
  branding: 'My App'
};

export default Header;
