import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  LogoutBtn,
  DropdownContent,
} from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { email, logOut, selectItem = {} } = this.props;
    return (
      <FooterWrap>
        <HeaderContainer>
          <A to="/">
            <Img src={logo} alt="Logo" />
          </A>
          <NavBar>
            <HeaderLink active={selectItem.link === '/trade'} to="/trade">
              Торги
            </HeaderLink>
          </NavBar>
          <CourseWrap>
            <CourseItem>
              <p>
                <span>4 277,5</span>
                <br />
                1BTC
              </p>
            </CourseItem>
            <CourseItem>
              <p>
                <span>290</span>
                <br />
                1ETC
              </p>
            </CourseItem>
          </CourseWrap>
          <PersonalInfoContainer>
            <PersonalItem active={selectItem.link === '/feed'}>
              <Link to="/feed">Лента</Link>
            </PersonalItem>
            <PersonalItem active={selectItem.link === '/places'}>
              <Link to="/places">3 место</Link>
            </PersonalItem>
            <PersonalItemEmail active={selectItem.link === '/profile'}>
              <Link to="/profile">{email}</Link>
              <DropdownContent>
                <LogoutBtn type="button" onClick={logOut}>
                  Выйти
                </LogoutBtn>
              </DropdownContent>
            </PersonalItemEmail>
          </PersonalInfoContainer>
        </HeaderContainer>
      </FooterWrap>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  selectItem: PropTypes.object,
  logOut: PropTypes.func,
};

export default Header;
