/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LangContext from '../contexts/LangContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LangContext;
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LangContext.Consumer>
              {(value) => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LangContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
