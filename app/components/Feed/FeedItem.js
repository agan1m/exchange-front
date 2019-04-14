import React, { Component } from 'react';
import CommentIcon from '../Icons/Comment';
import AppSettings from '../../appSettings';
import { dateFormat } from '../../helpers/Dates';
import {
  FeedItemContainer,
  FeedAuthorContainer,
  FeedAuthorImg,
  FeedAuthorName,
  FeedAuthorPlace,
  FeedAuthorDate,
  FeedItemContent,
  FeedItemTitle,
  FeedTitleContainer,
  Comments,
} from './Wrappers';
/* eslint-disable */
class FeedItem extends Component {
  render() {
    const { title, content, user = {}, createdAt } = this.props.feed;
    const {name, avatar} = user;
    return (
      <FeedItemContainer>
        <FeedAuthorContainer>
          <div>
            <FeedAuthorImg src={`${AppSettings.webApiUrl}/${avatar}`}/>
            <FeedAuthorName>{name}</FeedAuthorName>
            <FeedAuthorPlace>11 место</FeedAuthorPlace>
          </div>
          <div>
            <FeedAuthorDate>{dateFormat(createdAt, true, 'HH:mm DD.MM.YY')}</FeedAuthorDate>
          </div>
        </FeedAuthorContainer>
        <div>
          <FeedTitleContainer>
            <FeedItemTitle>{title || ''}</FeedItemTitle>
            <Comments>
              <CommentIcon style={{ marginRight: 5 }} />
              99+
            </Comments>
          </FeedTitleContainer>
          <FeedItemContent>{content || ''}</FeedItemContent>
        </div>
      </FeedItemContainer>
    );
  }
}

export default FeedItem;
