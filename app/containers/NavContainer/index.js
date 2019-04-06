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

class NavContainer extends Component {
  render() {
    const { navContainer, header } = this.props;
    const { menu } = navContainer;
    return <>{header ? <Header /> : <Footer menu={menu} />}</>;
  }
}

NavContainer.propTypes = {
  navContainer: PropTypes.object,
  header: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  navContainer: makeSelectNav(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'navContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(NavContainer);
