import React, { Component } from 'react';
import { TradeTitle, BuyTradeField, BuyTradeWrap, BuyTradeBtn, CurrencyName } from './Wrappers';

/* eslint-disable */
class BuyTrade extends Component {
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
            <BuyTradeBtn danger={true}>Продать</BuyTradeBtn>
          </BuyTradeWrap>
          <BuyTradeWrap>
            <BuyTradeField>
              <span>54.43</span>
              <CurrencyName>$</CurrencyName>
            </BuyTradeField>
            <BuyTradeBtn>Купить</BuyTradeBtn>
          </BuyTradeWrap>
        </div>
      </div>
    );
  }
}

export default BuyTrade;
