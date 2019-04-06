import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Img from './Img';
import { FooterWrap, Container, A } from './Wrapper';
import logo from '../../images/Logo-white.svg';

function Footer({ menu = [] }) {
  return (
    <FooterWrap>
      <Container>
        <A to="/">
          <Img src={logo} alt="Logo" />
        </A>
        <NavBar>
          {menu.map(item => (
            <HeaderLink key={item.name} to={item.link}>
              {item.name}
            </HeaderLink>
          ))}
        </NavBar>
        <p>Copyright</p>
      </Container>
    </FooterWrap>
  );
}

Footer.propTypes = {
  menu: PropTypes.array,
};

export default Footer;
