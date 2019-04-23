import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const CourseWrap = styled.div`
  display: flex;
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  justify-content: space-between;
  width: 17%;
`;

export const CourseItem = styled.p`
  background-color: #3f4143;
  margin: 0;
  width: 120px;
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 35%;
`;

export const PersonalItem = styled.p`
  background-color: ${props => (props.active ? '#4b94a9' : '#555658')};
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 2px 30px;
  font-weight: 400;
  cursor: pointer;
  :hover {
    background-color: #4b94a9;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const PersonalItemEmail = styled(PersonalItem)`
  background-color: ${props => (props.active ? '#4b94a9' : '#555658')};
  position: relative;
  :hover {
    background-color: #4b94a9;
    & div {
      display: block;
    }
  }
`;

export const LogoutBtn = styled.button`
  background-color: #555658;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 2px 30px;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  display: block;
  margin-top: 5%;
  :hover {
    background-color: #4b94a9;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  :focus {
    outline: none;
  }
`;
