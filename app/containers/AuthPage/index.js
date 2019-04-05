import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectLoginPage } from './selectors';
import { loginRequest, loginChangeForm } from './actions';
import PageContent from '../../components/_common/Layout/PageContent';
import AuthForm from '../../components/Auth/AuthForm';
/* eslint-disable */
class AuthPage extends Component {
  render() {
    const { loginPage, loginChangeForm, loginRequest } = this.props;
    const { regForm } = loginPage;
    return (
      <PageContent>
        <Helmet>
          <title>Авторизация</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <AuthForm onChange={loginChangeForm} onSubmit={loginRequest} isLogin {...regForm} />
      </PageContent>
    );
  }
}

AuthPage.propTypes = {
  loginPage: PropTypes.object,
  loginRequest: PropTypes.func,
  loginChangeForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: ev => dispatch(loginRequest(ev)),
    loginChangeForm: ev => dispatch(loginChangeForm(ev)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'loginPage', saga });
const withReducer = injectReducer({ key: 'loginPage', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);
