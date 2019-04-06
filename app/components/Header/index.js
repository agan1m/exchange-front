import React from 'react';

import Img from '../Footer/Img';
import NavBar from './NavBar';
import HeaderLink from '../Footer/HeaderLink';
import { FooterWrap, A } from '../Footer/Wrapper';
import logo from '../../images/Logo-white.svg';
import {
  CourseWrap,
  CourseItem,
  HeaderContainer,
  PersonalInfoContainer,
  PersonalItem,
  PersonalItemEmail,
} from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <FooterWrap>
        <HeaderContainer>
          <A to="/">
            <Img src={logo} alt="Logo" />
          </A>
          <NavBar>
            <HeaderLink to="/">Главная</HeaderLink>
          </NavBar>
          <CourseWrap>
            <CourseItem>
              <p className="aa">
                <span>4 277,5</span>
                <br />
                1BTC
              </p>
            </CourseItem>
            <CourseItem>
              <p className="aa">
                <span>290</span>
                <br />
                1ETC
              </p>
            </CourseItem>
          </CourseWrap>
          <PersonalInfoContainer>
            <PersonalItem>Лента</PersonalItem>
            <PersonalItem>3 место</PersonalItem>
            <PersonalItemEmail>marsov-v@mail.ru</PersonalItemEmail>
          </PersonalInfoContainer>
        </HeaderContainer>
      </FooterWrap>
    );
  }
}

export default Header;
