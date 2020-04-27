import React from 'react';
import UserCreate from './UserCreate'
import LangContext from '../contexts/LangContext';
import ColorContext from '../contexts/ColorContext';
import LangSelector from './LangSelector';

class App extends React.Component {

  state = {language: 'english', color: 'primary'};

  onLanguageChange = (language, color) => {
    this.setState({language, color});
  }

  render() {
    return (
      <div className='ui container'>
        <LangSelector onLanguageChange={this.onLanguageChange} />
        <LangContext.Provider value={this.state.language}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LangContext.Provider>
      </div>
    )
  }
}

export default App;