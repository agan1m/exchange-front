import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
import Input from '../../components/_common/Input';

class AuthPage extends Component {
  _handleSubmit = () => {
    const { loginRequest, loginPage } = this.props;
    loginRequest(loginPage.regForm);
  };

  _handleOnChange(ev, attr) {
    const { loginChangeForm, loginPage } = this.props;
    const { regForm } = loginPage;

    loginChangeForm({ ...regForm, [attr]: ev.target.value });
  }

  render() {
    const { loginPage } = this.props;
    const { regForm } = loginPage;
    const { email, password } = regForm;
    return (
      <PageContent>
        <Helmet>
          <title>Авторизация</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div>
          <p>Авторизация</p>
          <Input value={email} onChange={ev => this._handleOnChange(ev, 'email')} />
          <Input value={password} onChange={ev => this._handleOnChange(ev, 'password')} />
          <button type="button" onClick={this._handleSubmit}>
            Войти
          </button>
          <Link to="/registration">Зарегестрироваться</Link>
        </div>
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
