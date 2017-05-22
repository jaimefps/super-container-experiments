import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ marginTop: '25%', marginLeft: '50%' }}>
        <button onClick={() => this.props.switchBoolean(this.props.boolean)}> ! </button>
        {JSON.stringify(this.props.boolean)}
      </div>
    );
  }
}

export default App;
