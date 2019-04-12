import React from 'react';
import PropTypes from 'prop-types';
import { Title, BillWrapper, BillCount } from './Wrappers';

const BillInfo = ({ bill = {} }) => (
  <div>
    <Title>Ваш счет</Title>
    <BillWrapper>
      <div>
        <BillCount>{bill.etc || 0}</BillCount> <span>ETC</span>
      </div>
      <div>
        <BillCount>{bill.btc || 0}</BillCount> <span>BTC</span>
      </div>
      <div>
        <BillCount>{bill.dollars || 0}</BillCount> <span>$</span>
      </div>
    </BillWrapper>
  </div>
);

BillInfo.propTypes = {
  bill: PropTypes.object,
};

export default BillInfo;
