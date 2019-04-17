import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { socketConnect } from './actions';
import { makeSelectNotificationManager } from './selectors';

class NotificationManager extends Component {
  componentDidMount() {
    const { socketConnect } = this.props;
    socketConnect();
  }

  render() {
    return <Fragment />;
  }
}

NotificationManager.propTypes = {
  // notificationManager: PropTypes.object,
  socketConnect: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  notificationManager: makeSelectNotificationManager(),
});

function mapDispatchToProps(dispatch) {
  return {
    socketConnect: () => dispatch(socketConnect()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'notificationManager', saga });
const withReducer = injectReducer({ key: 'notificationManager', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NotificationManager);
