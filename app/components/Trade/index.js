import React, { Component } from 'react';
import TradeBill from './TradeBill';
import BuyTrade from './BuyTrade';
import Table from './Table';
import { TradeWrapper } from './Wrappers';
/* eslint-disable */
class Trade extends Component {
  render() {
    const { bill, loading, tradeOperationRequest } = this.props;
    return (
      <TradeWrapper>
        <div style={{ marginRight: '27%' }}>
          <TradeBill bill={bill} />
          <BuyTrade tradeOperationRequest={tradeOperationRequest} />
        </div>
        <div style={{ width: '50%' }}>
          <Table loading={loading} />
        </div>
      </TradeWrapper>
    );
  }
}

export default Trade;
