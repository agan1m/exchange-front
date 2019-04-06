import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
`;

export const FooterWrap = styled.div`
  background-color: #2a2c2e;
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const A = styled(Link)`
  color: #41addd;
  width: 14%;

  &:hover {
    color: #6cc0e5;
  }
`;

export default Wrapper;
