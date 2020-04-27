import React from 'react';
import LangContext from '../contexts/LangContext';

class Field extends React.Component {

  static contextType = LangContext;

  render() {

    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;