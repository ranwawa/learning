import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Mine from './mine';
import Link from './link';

export default class ExactAndStrict extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Link />
          <Route exact strict path="/home"><Home /></Route>
          <Route path="/home/mine"><Mine /></Route>
        </Router>

      </div>
    );
  }
}
