import styled from 'styled-components';

export const FeedListContainer = styled.div`
  margin: 0 auto;
  margin-top: 45px;
  width: 634px;
`;

export const FeedItemContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 50px;
  color: #000;
  font-size: 18px;
`;

export const FeedAuthorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 25px;
`;

export const FeedAuthorName = styled.span`
  margin-right: 30px;
  font-weight: 600;
`;

export const FeedAuthorPlace = styled.span`
  color: #fff;
  font-size: 15px;
  padding: 7px;
  background-color: #468597;
  text-transform: uppercase;
`;

export const FeedAuthorDate = styled.span`
  color: #adaeb0;
`;

export const FeedItemTitle = styled.p`
  font-size: 21px;
  font-weight: 600;
`;

export const FeedItemContent = styled.p`
  font-weight: 400;
  font-size: 17px;
`;

export const FeedTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Comments = styled.p`
  background-color: #f2f3f5;
  color: #b3b3b5;
  line-height: 36px;
  padding: 7px;
  margin-bottom: 0;
  align-self: center;
`;
