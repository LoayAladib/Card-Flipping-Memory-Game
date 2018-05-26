import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ button }) => (
  <header className="header center">
    <div className="wrapper">
      <h1 className="center">Card Flipping Memory Game</h1>
      <br/>
      <div id="game-control-buttons" className="center">
        {button}
      </div>
      <br/>
    </div>
  </header>
);

Header.propTypes = {
  button: PropTypes.element.isRequired
};

export default Header;
