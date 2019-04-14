import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import { makeSelectNav } from './selectors';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { makeSelectCurrentUser } from '../App/selectors';
import { logOut } from './actions';
/* eslint-disable */
class NavContainer extends Component {
  render() {
    const { navContainer, header, user, logOut } = this.props;
    const { menu } = navContainer;
    return <Fragment>{header ? <Header email={user.email} logOut={logOut} /> : <Footer menu={menu} />}</Fragment>;
  }
}
/* eslint-enable */
NavContainer.propTypes = {
  navContainer: PropTypes.object,
  user: PropTypes.object,
  header: PropTypes.bool,
  logOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navContainer: makeSelectNav(),
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'navContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(NavContainer);
