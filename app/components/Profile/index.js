import React from 'react';
import PropTypes from 'prop-types';
import PersonalSettings from './PersonalSettings';
import BillInfo from './BillInfo';
import { ProfileContainer } from './Wrappers';

const Profile = ({ changeInfoRequest }) => (
  <ProfileContainer>
    <PersonalSettings changeInfoRequest={changeInfoRequest} />
    <BillInfo />
  </ProfileContainer>
);

Profile.propTypes = {
  changeInfoRequest: PropTypes.func,
};

export default Profile;
