import React, { Component } from 'react';
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

class NavContainer extends Component {
  render() {
    const { navContainer, header, user } = this.props;
    const { menu } = navContainer;
    return <>{header ? <Header email={user.email} /> : <Footer menu={menu} />}</>;
  }
}

NavContainer.propTypes = {
  navContainer: PropTypes.object,
  user: PropTypes.object,
  header: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  navContainer: makeSelectNav(),
  user: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'navContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(NavContainer);
