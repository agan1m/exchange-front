import React from 'react';
import PropTypes from 'prop-types';
import PersonalSettings from './PersonalSettings';
import BillInfo from './BillInfo';
import { ProfileContainer } from './Wrappers';

const Profile = ({ changeInfoRequest, uploadImageRequest }) => (
  <ProfileContainer>
    <PersonalSettings changeInfoRequest={changeInfoRequest} uploadImageRequest={uploadImageRequest} />
    <BillInfo />
  </ProfileContainer>
);

Profile.propTypes = {
  changeInfoRequest: PropTypes.func,
  uploadImageRequest: PropTypes.func,
};

export default Profile;
