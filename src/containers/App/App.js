import React, { PropTypes } from 'react';
import { Router, Link } from 'react-router';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content() {
    return (
      <div>
      <Router
        routes={this.props.routes}
        history={this.props.history}>
      </Router>
      </div>
    )
  }

  render () {
     return (
       <div style={{ height: '100%' }}>
         {this.content}
       </div>
     )
   }
}

export default App;
