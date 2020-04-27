/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '833647555582-pt0t8blmlm6nouqfja6a125ebcefuiov.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  //  TODO Add trySignIn. trySignOut, changeAuth as action creators instead

  onAuthChange = (isSignedIn) => {
    // eslint-disable-next-line no-shadow
    const { signIn, signOut } = this.props;
    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else {
      signOut();
    }
  }

  onSignInClick() {
    this.auth.signIn();
  }

  onSignOutClick() {
    this.auth.signOut();
  }

  renderAuthButton() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
    } if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={() => this.onSignOutClick()}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={() => this.onSignInClick()} className="ui red google button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }

  render() {
    return (<div>{this.renderAuthButton()}</div>);
  }
}

const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
