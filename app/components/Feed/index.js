import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';
import FeedForm from './FeedForm';
import { FeedListContainer } from './Wrappers';

const FeedList = ({ feeds = [], feedForm, feedFormChange }) => (
  <FeedListContainer>
    {feeds.map(feed => (
      <FeedItem feed={feed} />
    ))}
    <FeedForm feedForm={feedForm} feedFormChange={feedFormChange} />
  </FeedListContainer>
);

FeedList.propTypes = {
  feeds: PropTypes.array,
  feedForm: PropTypes.object,
  feedFormChange: PropTypes.func,
};

export default FeedList;
