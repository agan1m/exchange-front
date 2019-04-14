import styled from 'styled-components';
import { BillWrapper, BillCount } from '../Profile/Wrappers';

export const TradeWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 55px 20px 55px 80px;
  display: flex;
`;

export const TradeTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
`;

export const TradeBillWrapper = styled(BillWrapper)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const TradeBillCount = styled(BillCount)`
  width: 80%;
  text-align: center;
`;

export const BuyTradeWrap = styled.div`
  display: flex;
  margin-bottom: 18px;
  align-items: center;
  justify-content: space-between;
`;

export const BuyTradeField = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  border-radius: 3px;
  width: 51%;
  padding: 8px 17px;
`;

export const CurrencyName = styled.span`
  color: #313030;
  opacity: 0.45;
`;

export const BuyTradeBtn = styled.button`
  background-color: ${props => (props.danger ? '#db5753' : '#4db6e2')};
  border-radius: 3px;
  margin-left: 20px;
  padding: 9px 17px;
  font-size: 14px;
  color: #fff;
  width: 40%;
  cursor: pointer;
`;
