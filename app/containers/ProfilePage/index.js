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
import { makeSelectProfilePage } from './selectors';
import PageContent from '../../components/_common/Layout/PageContent/AuthPageContent';
import NavContainer from '../NavContainer';
import Profile from '../../components/Profile';
import { changeInfoRequest, uploadImageRequest } from './actions';
import { makeSelectCurrentUser } from '../App/selectors';

class ProfilePage extends Component {
  _handleSubmit = () => {
    const { changeInfoRequest, profilePage } = this.props;
    changeInfoRequest(profilePage.regForm);
  };

  render() {
    const { changeInfoRequest, uploadImageRequest, user } = this.props;
    return (
      <Fragment>
        <NavContainer header />
        <PageContent>
          <Helmet>
            <title>Профиль</title>
            <meta name="description" content="Description of ProfilePage" />
          </Helmet>
          <Profile changeInfoRequest={changeInfoRequest} user={user} uploadImageRequest={uploadImageRequest} />
        </PageContent>
        <NavContainer />
      </Fragment>
    );
  }
}

ProfilePage.propTypes = {
  profilePage: PropTypes.object,
  user: PropTypes.object,
  changeInfoRequest: PropTypes.func,
  uploadImageRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
  user: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeInfoRequest: ev => dispatch(changeInfoRequest(ev)),
    uploadImageRequest: ev => dispatch(uploadImageRequest(ev)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'profilePage', saga });
const withReducer = injectReducer({ key: 'profilePage', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
