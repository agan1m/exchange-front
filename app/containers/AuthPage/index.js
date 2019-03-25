import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageContent from '../../components/_common/Layout/PageContent';
import Input from '../../components/_common/Input';
/* eslint-disable */
class AuthPage extends Component {
  render() {
    return (
      <PageContent>
        <Helmet>
          <title>Авторизация</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div>
          <p>Авторизация</p>
          <Input />
          <Input />
          <button>Войти</button>
          <Link to={'/registration'}>Зарегестрироваться</Link>
        </div>
      </PageContent>
    );
  }
}

export default AuthPage;
