import React, { Component } from 'react';
import PropType from 'prop-types';
import { Title, PersonalWrap, PersonalContainer, PersonalInfo, ChangeLink, InputWrap } from './Wrappers';
import ava from '!file-loader?name=[name].[ext]!../../images/ava.png';
import AppSettings from '../../appSettings';

class PersonalSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeName: false,
      changeSecondName: false,
    };
    this.changeName = React.createRef();
    this.changeSecondName = React.createRef();
    this.fileInput = React.createRef();
  }

  _handlerChangeName = (ev, attr) => {
    this.setState({ [attr]: true }, () => this[attr].current.input.current.focus());
  };

  _handlerChangeRequest = (ev, attr) => {
    const { changeInfoRequest } = this.props;
    const { value } = ev.currentTarget;
    const key = attr.replace('change', '').toLowerCase();
    const form = { [key]: value };
    this.setState({ [attr]: false }, () => changeInfoRequest(form));
  };

  _handlerClickUpload = () => {
    this.fileInput.current.click();
  };

  _handlerUploadRequest = ev => {
    const { uploadImageRequest } = this.props;

    uploadImageRequest(ev.currentTarget.files[0]);
  };

  render() {
    const { user } = this.props;
    const { name, secondname, avatar, email } = user;
    const { changeName, changeSecondName } = this.state;
    return (
      <PersonalContainer>
        <Title>Личный профиль</Title>
        <PersonalWrap>
          <div>
            <img src={avatar ? `${AppSettings.webApiUrl}/${avatar}` : ava} alt="avatar" />
            <p style={{ textAlign: 'center' }}>
              <ChangeLink onClick={this._handlerClickUpload}>Изменить аватар</ChangeLink>
              <input hidden type="file" ref={this.fileInput} onChange={this._handlerUploadRequest} />
            </p>
          </div>
          <PersonalInfo>
            <p style={{ display: `${changeName ? 'none' : 'block'}` }}>
              {name || ''} <ChangeLink onClick={val => this._handlerChangeName(val, 'changeName')}>изменить</ChangeLink>
            </p>
            <InputWrap
              hidden={!changeName}
              onBlur={val => this._handlerChangeRequest(val, 'changeName')}
              ref={this.changeName}
            />
            <p style={{ display: `${changeSecondName ? 'none' : 'block'}` }}>
              {secondname || ''}{' '}
              <ChangeLink onClick={val => this._handlerChangeName(val, 'changeSecondName')}>изменить</ChangeLink>
            </p>
            <InputWrap
              hidden={!changeSecondName}
              onBlur={val => this._handlerChangeRequest(val, 'changeSecondName')}
              ref={this.changeSecondName}
            />

            <p>{email || ''}</p>
          </PersonalInfo>
        </PersonalWrap>
      </PersonalContainer>
    );
  }
}

PersonalSettings.propTypes = {
  changeInfoRequest: PropType.func,
  uploadImageRequest: PropType.func,
  user: PropType.object,
};

export default PersonalSettings;
