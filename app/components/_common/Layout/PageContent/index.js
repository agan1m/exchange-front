import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: grey;
`;
const PageContent = props => (
  <StyledContainer>{props.children}</StyledContainer>
);

PageContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PageContent;
