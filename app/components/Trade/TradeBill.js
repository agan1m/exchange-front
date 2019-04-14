import React, { Component } from 'react';
import { TradeTitle, TradeBillWrapper, TradeBillCount } from './Wrappers';

/* eslint-disable */
class TradeBill extends Component {
  render() {
    return (
      <div style={{ marginBottom: 60 }}>
        <TradeTitle>Ваш счет</TradeTitle>
        <div>
          <TradeBillWrapper>
            <TradeBillCount>12.12332</TradeBillCount>
            <span>ETC</span>
          </TradeBillWrapper>
          <TradeBillWrapper>
            <TradeBillCount>12.12332</TradeBillCount>
            <span>BTC</span>
          </TradeBillWrapper>
          <TradeBillWrapper>
            <TradeBillCount>12</TradeBillCount>
            <span>$</span>
          </TradeBillWrapper>
        </div>
      </div>
    );
  }
}

export default TradeBill;
