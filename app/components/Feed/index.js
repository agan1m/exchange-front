import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';
import { FeedListContainer } from './Wrappers';

const FeedList = ({ feeds = [] }) => (
  <FeedListContainer>
    {feeds.map(feed => (
      <FeedItem feed={feed} />
    ))}
  </FeedListContainer>
);

FeedList.propTypes = {
  feeds: PropTypes.array,
};

export default FeedList;
