
import React, {Component} from 'react';

class HelloMessage {
  render() {
    return (
      <h1>hello world, {this.props.name}</h1>
    );
  }
}

export default HelloMessage;
