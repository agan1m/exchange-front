import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { feedListRequest, feedFormChange } from './actions';
import { makeSelectFeedPage } from './selectors';
import PageContent from '../../components/_common/Layout/PageContent/AuthPageContent';
import NavContainer from '../NavContainer';
import FeedList from '../../components/Feed';

class FeedPage extends Component {
  componentDidMount() {
    const { feedListRequest } = this.props;

    feedListRequest();
  }

  render() {
    const { feedFormChange } = this.props;
    const { feeds, feedForm } = this.props.feedPage;
    return (
      <Fragment>
        <NavContainer header />
        <PageContent>
          <Helmet>
            <title>Лента</title>
            <meta name="description" content="Description of FeedPage" />
          </Helmet>
          <FeedList feeds={feeds} feedForm={feedForm} feedFormChange={feedFormChange} />
        </PageContent>
        <NavContainer />
      </Fragment>
    );
  }
}

FeedPage.propTypes = {
  feedPage: PropTypes.object,
  feedListRequest: PropTypes.func,
  feedFormChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  feedPage: makeSelectFeedPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    feedListRequest: () => dispatch(feedListRequest()),
    feedFormChange: ev => dispatch(feedFormChange(ev)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'feedPage', saga });
const withReducer = injectReducer({ key: 'feedPage', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeedPage);
