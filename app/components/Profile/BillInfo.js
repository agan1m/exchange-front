import React, { Component } from 'react';
import { Title, BillWrapper, BillCount } from './Wrappers';
/* eslint-disable */
class BillInfo extends Component {
  render() {
    return (
      <div>
        <Title>Ваш счет</Title>
        <BillWrapper>
          <div>
            <BillCount>12.12332</BillCount> <span>ETC</span>
          </div>
          <div>
            <BillCount> 1.234032</BillCount> <span>BTC</span>
          </div>
          <div>
            <BillCount>1 123.00</BillCount> <span>$</span>
          </div>
        </BillWrapper>
      </div>
    );
  }
}

export default BillInfo;
