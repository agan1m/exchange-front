import React, { Component } from 'react';
import { InputWrapper } from './wrappers';
/* eslint-disable */
class Input extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return <InputWrapper ref={this.input} type="text" {...this.props} />;
  }
}

export default Input;
