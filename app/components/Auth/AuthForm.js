import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormWrap, PageWrap, FormBtn, NavigateBlock, ImputEmail, ImputPassword } from './wrappers';

import logo from '../../images/Logo.svg';

class AuthForm extends Component {
  _handleSubmit = () => {
    const { onSubmit, email, password } = this.props;
    onSubmit({ email, password });
  };

  _handleOnChange(ev, attr) {
    const { onChange, email, password } = this.props;
    const form = { email, password };

    onChange({ ...form, [attr]: ev.target.value });
  }

  render() {
    const { email, password, isLogin } = this.props;
    return (
      <PageWrap>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <FormWrap>
          <ImputEmail value={email} placeholder="email" onChange={ev => this._handleOnChange(ev, 'email')} />
          <ImputPassword
            value={password}
            placeholder="password"
            onChange={ev => this._handleOnChange(ev, 'password')}
          />
          <FormBtn type="button" onClick={this._handleSubmit}>
            {isLogin ? 'Войти' : 'Зарегестрироваться'}
          </FormBtn>
        </FormWrap>
        {isLogin ? (
          <NavigateBlock>
            <span>
              Впервые на сайте? <Link to="/registration">Регистрация</Link>
            </span>
          </NavigateBlock>
        ) : (
          <NavigateBlock>
            <span>
              Есть аккаунт? <Link to="/login">Авторизация</Link>
            </span>
          </NavigateBlock>
        )}
      </PageWrap>
    );
  }
}

AuthForm.propTypes = {
  isLogin: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AuthForm;
