import React, { Component } from 'react';
import { InputWrapper } from './wrappers';
/* eslint-disable */
class Input extends Component {
  render() {
    return <InputWrapper type="text" {...this.props}/>;
  }
}

export default Input;
