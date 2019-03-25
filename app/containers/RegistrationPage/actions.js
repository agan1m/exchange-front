import {
  REGISTRATION_REQUEST,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  CHANGE_REGISTRATION_FORM,
} from './constants';

export const registrationRequest = form => ({
  type: REGISTRATION_REQUEST,
  form,
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

export const registrationFailure = error => ({
  type: REGISTRATION_FAILURE,
  error,
});

export const registrationChangeForm = form => ({
  type: CHANGE_REGISTRATION_FORM,
  form,
});
