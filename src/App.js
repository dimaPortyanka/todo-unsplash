import React, { Component } from 'react'
import { Provider } from 'unstated'
import { HashRouter } from 'react-router-dom'

import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <Provider>
        <HashRouter>
          <TodoList />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
