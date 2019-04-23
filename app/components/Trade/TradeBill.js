import React, { Component } from 'react';
import { TradeTitle, TradeBillWrapper, TradeBillCount } from './Wrappers';

/* eslint-disable */
class TradeBill extends Component {
  render() {
    const { bill = {} } = this.props;
    const { btc, etc, dollars } = bill;
    return (
      <div style={{ marginBottom: 60 }}>
        <TradeTitle>Ваш счет</TradeTitle>
        <div>
          <TradeBillWrapper>
            <TradeBillCount>{etc || 0}</TradeBillCount>
            <span>ETC</span>
          </TradeBillWrapper>
          <TradeBillWrapper>
            <TradeBillCount>{btc || 0}</TradeBillCount>
            <span>BTC</span>
          </TradeBillWrapper>
          <TradeBillWrapper>
            <TradeBillCount>{dollars || 0}</TradeBillCount>
            <span>$</span>
          </TradeBillWrapper>
        </div>
      </div>
    );
  }
}

export default TradeBill;
