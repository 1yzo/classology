import React, { Component } from 'react';

import AppRouter from '../routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        Classology
        <AppRouter />
      </div>
    );
  }
}

export default App;
