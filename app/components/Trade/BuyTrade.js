import React, { Component } from 'react';
import { TradeTitle, BuyTradeField, BuyTradeWrap, BuyTradeBtn, CurrencyName } from './Wrappers';

/* eslint-disable */
class BuyTrade extends Component {
  state = {
    btc: 0,
    usd: 0,
    etc: 0,
  };
  _handlerTradeAction = (ev, operationType) => {
    const { tradeOperationRequest } = this.props;
    tradeOperationRequest({ operationType, form: { ...this.state } });
  };

  render() {
    return (
      <div>
        <TradeTitle>Покупка/Продажа</TradeTitle>
        <div>
          <BuyTradeWrap>
            <BuyTradeField>
              <span>0.1</span>
              <CurrencyName>BTC</CurrencyName>
            </BuyTradeField>
          </BuyTradeWrap>
          <BuyTradeWrap>
            <BuyTradeField>
              <span>54.43</span>
              <CurrencyName>$</CurrencyName>
            </BuyTradeField>
            <BuyTradeBtn onClick={ev => this._handlerTradeAction(ev, 'sell')} danger={true}>
              Продать
            </BuyTradeBtn>
          </BuyTradeWrap>
          <BuyTradeWrap>
            <BuyTradeField>
              <span>54.43</span>
              <CurrencyName>$</CurrencyName>
            </BuyTradeField>
            <BuyTradeBtn onClick={ev => this._handlerTradeAction(ev, 'buy')}>Купить</BuyTradeBtn>
          </BuyTradeWrap>
        </div>
      </div>
    );
  }
}

export default BuyTrade;
