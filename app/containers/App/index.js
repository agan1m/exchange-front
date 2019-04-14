/**
 *
 * App
 *
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import saga from './saga';
import reducer from './reducer';
import NotFoundPage from '../NotFoundPage';
import { makeSelectCurrentUser } from './selectors';
import GlobalStyle from '../../global-styles';
import AuthRoute from '../Routes/AuthRoute';
import ProtectRoute from '../Routes/ProtectedRoute';
import AuthPage from '../AuthPage';
import RegistrationPage from '../RegistrationPage';
import HomePage from '../HomePage';
import ProfilePage from '../ProfilePage';
import FeedPage from '../FeedPage';
import TradePage from '../TradePage';
import injectReducer from '../../utils/injectReducer';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  background-color: #f5f5f6;
`;

const MainWrapper = styled.div`
  flex: 1 0 auto;
  padding: 0 0rem;
  min-height: calc(100vh - 78px);
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppWrapper>
          <Helmet titleTemplate="%s - J-Trading" defaultTitle="J-Trading">
            <meta name="description" content="J-Trading" />
          </Helmet>
          <MainWrapper>
            <Switch>
              <AuthRoute exact path="/login" component={AuthPage} />
              <AuthRoute exact path="/registration" component={RegistrationPage} />
              <ProtectRoute path="/home" component={HomePage} />
              <ProtectRoute path="/profile" component={ProfilePage} />
              <ProtectRoute path="/feed" component={FeedPage} />
              <ProtectRoute path="/trade" component={TradePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </MainWrapper>
          <GlobalStyle />
        </AppWrapper>
      </Fragment>
    );
  }
}

/* App.propTypes = {
  error: PropTypes.object,
}; */

const mapStateToProps = null /* createStructuredSelector({
  user: makeSelectCurrentUser(),
}) */;

/* function mapDispatchToProps(dispatch) {
  return {};
} */
const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'global', saga });
const withReducer = injectReducer({ key: 'global', reducer });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(App),
);
