import React, { Component } from 'react';
import { Table } from 'antd';
import { TradeTitle } from './Wrappers';

/* eslint-disable */
class TableComponent extends Component {
  render() {
    const columns = [
      {
        title: 'Операция',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Дата',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'UTC',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'BTC',
        key: 'tags',
        dataIndex: 'tags',
      },
    ];
    return (
      <div>
        <TradeTitle>Покупка/Продажа</TradeTitle>
        <Table columns={columns} locale={{emptyText: 'Нет данных'}}  />
      </div>
    );
  }
}

export default TableComponent;
