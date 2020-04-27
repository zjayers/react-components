/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchOneStream, editOneStream } from '../../actions';
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {

  onFormSubmit = (formValues) => {
    this.props.editOneStream(this.props.match.params.id, formValues);
  }

  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchOneStream, editOneStream })(StreamEdit);
