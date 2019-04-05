/**
 *
 * App
 *
 */
/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import saga from './saga';
import NotFoundPage from '../NotFoundPage';
import { makeSelectCurrentUser } from './selectors';
import GlobalStyle from '../../global-styles';
import AuthRoute from '../Routes/AuthRoute';
import ProtectRoute from '../Routes/ProtectedRoute';
import AuthPage from '../AuthPage';
import RegistrationPage from '../RegistrationPage';
import HomePage from '../HomePage';

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

class App extends React.Component {
  render() {
    return (
      <>
        <AppWrapper>
          <Helmet titleTemplate="%s - Агентский Портал" defaultTitle="Агентский Портал">
            <meta name="description" content="Агентский Портал" />
          </Helmet>
          <MainWrapper>
            <Switch>
              <AuthRoute exact path="/login" component={AuthPage} />
              <AuthRoute exact path="/registration" component={RegistrationPage} />
              <ProtectRoute path="/home" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </MainWrapper>
          <GlobalStyle />
        </AppWrapper>
      </>
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
const withReducer = null;

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(App),
);
