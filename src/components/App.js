import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ marginTop: '25%', marginLeft: '50%' }}>
        <button onClick={() => this.props.switchBool(this.props.bool)}> ! </button>
        {JSON.stringify(this.props.bool)}
      </div>
    );
  }
}

export default App;
