import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectRegistrationPage } from './selectors';
import { registrationRequest, registrationChangeForm } from './actions';
import PageContent from '../../components/_common/Layout/PageContent';
import Input from '../../components/_common/Input';

class RegistrationPage extends Component {
  _handleSubmit = () => {
    const { registrationRequest, registrationPage } = this.props;
    registrationRequest(registrationPage.regForm);
  };

  _handleOnChange(ev, attr) {
    const { registrationChangeForm, registrationPage } = this.props;
    const { regForm } = registrationPage;

    registrationChangeForm({ ...regForm, [attr]: ev.target.value });
  }

  render() {
    const { registrationPage } = this.props;
    const { regForm } = registrationPage;
    const { email, password } = regForm;
    return (
      <PageContent>
        <Helmet>
          <title>Регистрация</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div>
          <p>Регистрация</p>
          <Input
            value={email}
            onChange={ev => this._handleOnChange(ev, 'email')}
          />
          <Input
            value={password}
            onChange={ev => this._handleOnChange(ev, 'password')}
          />
          <button type="button" onClick={this._handleSubmit}>
            Зарегестрироваться
          </button>
          <Link to="/">Авторизоваться</Link>
        </div>
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
