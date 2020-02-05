import React, {Component} from 'react';
import List from './components/TaskList/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <List/>
      </div>
    );
  }
}
export default App;
