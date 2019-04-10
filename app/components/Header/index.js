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
} from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <FooterWrap>
        <HeaderContainer>
          <A to="/">
            <Img src={logo} alt="Logo" />
          </A>
          <NavBar>
            <HeaderLink to="/trade">Торги</HeaderLink>
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
            <PersonalItem>
              <Link to="/feed">Лента</Link>
            </PersonalItem>
            <PersonalItem>
              <Link to="/places">3 место</Link>
            </PersonalItem>
            <PersonalItemEmail>
              <Link to="/profile">{email}</Link>
            </PersonalItemEmail>
          </PersonalInfoContainer>
        </HeaderContainer>
      </FooterWrap>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

export default Header;
