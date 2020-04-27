/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamView from './streams/StreamView';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import history from '../history';
import Header from './Header';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <Header />
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/view/:id" exact component={StreamView} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
      </div>
    </Router>
  </div>
);

export default App;
