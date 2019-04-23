import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectTradePage } from './selectors';
import PageContent from '../../components/_common/Layout/PageContent/AuthPageContent';
import NavContainer from '../NavContainer';
import Trade from '../../components/Trade';
import { tradeListRequest, tradeOperationRequest } from './actions';
import { makeSelectBill } from '../App/selectors';

class TradePage extends Component {
  componentDidMount() {
    const { tradeListRequest } = this.props;
    tradeListRequest();
  }

  render() {
    const { bill, tradePage, tradeOperationRequest } = this.props;
    const { loading } = tradePage;
    return (
      <Fragment>
        <NavContainer header />
        <PageContent>
          <Helmet>
            <title>Торги</title>
            <meta name="description" content="Description of TradePage" />
          </Helmet>
          <Trade bill={bill} loading={loading} tradeOperationRequest={tradeOperationRequest} />
        </PageContent>
        <NavContainer />
      </Fragment>
    );
  }
}

TradePage.propTypes = {
  tradePage: PropTypes.object,
  bill: PropTypes.object,
  tradeListRequest: PropTypes.func,
  tradeOperationRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tradePage: makeSelectTradePage(),
  bill: makeSelectBill(),
});

function mapDispatchToProps(dispatch) {
  return {
    tradeListRequest: () => dispatch(tradeListRequest()),
    tradeOperationRequest: ev => dispatch(tradeOperationRequest(ev)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'tradePage', saga });
const withReducer = injectReducer({ key: 'tradePage', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TradePage);
