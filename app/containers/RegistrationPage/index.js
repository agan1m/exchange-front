import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectRegistrationPage } from './selectors';
import { registrationRequest, registrationChangeForm } from './actions';
import PageContent from '../../components/_common/Layout/PageContent';
import AuthForm from '../../components/Auth/AuthForm';
/* eslint-disable */
class RegistrationPage extends Component {
  render() {
    const { registrationPage, registrationRequest, registrationChangeForm } = this.props;
    const { regForm } = registrationPage;
    return (
      <PageContent>
        <Helmet>
          <title>Регистрация</title>
          <meta name="description" content="Description of RegistrationPage" />
        </Helmet>
        <AuthForm onChange={registrationChangeForm} onSubmit={registrationRequest} {...regForm} />
      </PageContent>
    );
  }
}

RegistrationPage.propTypes = {
  registrationPage: PropTypes.object,
  registrationRequest: PropTypes.func,
  registrationChangeForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  registrationPage: makeSelectRegistrationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    registrationRequest: ev => dispatch(registrationRequest(ev)),
    registrationChangeForm: ev => dispatch(registrationChangeForm(ev)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'registrationPage', saga });
const withReducer = injectReducer({ key: 'registrationPage', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegistrationPage);
