import React, { Component } from 'react';
import TradeBill from './TradeBill';
import BuyTrade from './BuyTrade';
import Table from './Table';
import { TradeWrapper } from './Wrappers';
/* eslint-disable */
class Trade extends Component {
  render() {
    return (
      <TradeWrapper>
        <div style={{ marginRight: '27%' }}>
          <TradeBill />
          <BuyTrade />
        </div>
        <div style={{ width: '50%' }}>
          <Table />
        </div>
      </TradeWrapper>
    );
  }
}

export default Trade;
