import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
/* import injectSaga from '../../utils/injectSaga';
import saga from './saga'; */
import reducer from './reducer';
import { makeSelectTradePage } from './selectors';
import PageContent from '../../components/_common/Layout/PageContent/AuthPageContent';
import NavContainer from '../NavContainer';
import Trade from '../../components/Trade';

class TradePage extends Component {
  _handleSubmit = () => {
    const { loginRequest, tradePage } = this.props;
    loginRequest(tradePage.regForm);
  };

  render() {
    return (
      <Fragment>
        <NavContainer header />
        <PageContent>
          <Helmet>
            <title>Торги</title>
            <meta name="description" content="Description of TradePage" />
          </Helmet>
          <Trade />
        </PageContent>
        <NavContainer />
      </Fragment>
    );
  }
}

TradePage.propTypes = {
  tradePage: PropTypes.object,
  // bill: PropTypes.object,
  loginRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tradePage: makeSelectTradePage(),
});

/* function mapDispatchToProps(dispatch) {
  return {
    loginRequest: ev => dispatch(loginRequest(ev)),
    loginChangeForm: ev => dispatch(loginChangeForm(ev)),
  };
} */
const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);
// const withSaga = injectSaga({ key: 'tradePage', saga });
const withReducer = injectReducer({ key: 'tradePage', reducer });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(TradePage);
