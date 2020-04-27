/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchOneStream, deleteOneStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }

  onDeleteBtnClick = () => {
    this.props.deleteOneStream(this.props.match.params.id);
  }

  navigateHome = () => {
    history.push('/');
  }

  renderButtons = () => (
    <Fragment>
      <button onClick={this.onDeleteBtnClick} className="ui button negative">Delete</button>
      <Link to='/' className="ui button">Cancel</Link>
    </Fragment>
  );

  render() {

    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
        <Modal
          title="Delete Stream"
          content={`Are you sure you want to delete stream: "${this.props.stream.title}"`}
          actions={this.renderButtons()}
          onDismiss={this.navigateHome}
        />
    );
  }

};

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchOneStream, deleteOneStream })(StreamDelete);
