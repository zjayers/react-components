import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay/season-display.component';
import Spinner from './components/Spinner/spinner.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message }))
  }

  createContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request"/>
  }

  render() {

    return (
      <div>
        {this.createContent()}
      </div>
    )

  }

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);