import styled from 'styled-components';
import Input from '../_common/Input';

export const ProfileContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 48px 101px 85px 127px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 57px;
`;

export const PersonalWrap = styled.div`
  display: flex;
`;

export const PersonalContainer = styled.div`
  width: 50%;
`;

export const PersonalInfo = styled.div`
  margin-left: 52px;
  font-size: 24px;
  font-weight: 500;
`;

export const ChangeLink = styled.span`
  font-size: 18px;
  text-decoration: underline;
  color: #b3b3b3;
  cursor: pointer;
`;

export const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 10px;
  height: 50%;
`;

export const BillCount = styled.span`
  background-color: #404243;
  color: #fff;
  padding: 6px 65px;
  border-radius: 3px;
`;

export const InputWrap = styled(Input)`
  padding: 0.27857143em 1em;
`;
