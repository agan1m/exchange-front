import styled from 'styled-components';
import Input from '../_common/Input';
import login from '../../images/user-shape.svg';
import password from '../../images/padlock-unlock.svg';

export const FormWrap = styled.div`
  width: 438px;
  height: 254px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 7px;
`;

export const PageWrap = styled.div`
  width: 438px;
  margin: 0 auto;
  align-self: center;
  justify-content: center;
`;

export const FormBtn = styled.button`
  width: 100%;
  background-color: #4db6e2;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 10px 0;
`;

export const NavigateBlock = styled.div`
  background-color: #fff;
  border-radius: 7px;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;

export const ImputEmail = styled(Input)`
  background-image: url(${login});
  background-size: 7%;
  background-position: 10px center;
  padding-left: 45px;
`;
export const ImputPassword = styled(Input)`
  background-image: url(${password});
  background-size: 7%;
  background-position: 10px center;
  padding-left: 45px;
`;
