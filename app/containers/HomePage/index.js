import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
/* import injectSaga from '../../utils/injectSaga';
import saga from './saga'; */
import reducer from './reducer';
import { makeSelectHomePage } from './selectors';
import PageContent from '../../components/_common/Layout/PageContent/AuthPageContent';
import NavContainer from '../NavContainer';

class HomePage extends Component {
  _handleSubmit = () => {
    const { loginRequest, homePage } = this.props;
    loginRequest(homePage.regForm);
  };

  render() {
    return (
      <>
        <NavContainer header />
        <PageContent>
          <Helmet>
            <title>Главная</title>
            <meta name="description" content="Description of HomePage" />
          </Helmet>
          <div>
            <h1>Главная</h1>
          </div>
        </PageContent>
        <NavContainer />
      </>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object,
  loginRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
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
// const withSaga = injectSaga({ key: 'homePage', saga });
const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(HomePage);
