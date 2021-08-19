import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  badgeStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <span style={ this.badgeStyle } className="badge badge-primary m-2">{ this.state.count }</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
      </React.Fragment>
    );
  }

  add = (() => {
    let counter = 0;
    return () => {
      return counter++;
    };
  })();

  handleIncrement() {
    this.setState({ count: this.add() });
  }
}

export default App;