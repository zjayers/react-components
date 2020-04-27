import React from 'react';

class LangSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i className='flag us' onClick={() => this.props.onLanguageChange('english', 'primary')} />
        <i className='flag no' onClick={() => this.props.onLanguageChange('dutch', 'red')} />
      </div>
    )
  }
}

export default LangSelector;