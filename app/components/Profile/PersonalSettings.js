import React, { Component } from 'react';
import PropType from 'prop-types';
import { Title, PersonalWrap, PersonalContainer, PersonalInfo, ChangeLink, InputWrap } from './Wrappers';
import ava from '!file-loader?name=[name].[ext]!../../images/ava.png';

class PersonalSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeName: false,
      changeSecondName: false,
    };
    this.changeName = React.createRef();
    this.changeSecondName = React.createRef();
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

  render() {
    const { changeName, changeSecondName } = this.state;
    return (
      <PersonalContainer>
        <Title>Личный профиль</Title>
        <PersonalWrap>
          <div>
            <img src={ava} alt="avatar" />
            <p style={{ textAlign: 'center' }}>
              <ChangeLink>Изменить аватар</ChangeLink>
            </p>
          </div>
          <PersonalInfo>
            <p style={{ display: `${changeName ? 'none' : 'block'}` }}>
              Константин <ChangeLink onClick={val => this._handlerChangeName(val, 'changeName')}>изменить</ChangeLink>
            </p>
            <InputWrap
              hidden={!changeName}
              onBlur={val => this._handlerChangeRequest(val, 'changeName')}
              ref={this.changeName}
            />
            <p style={{ display: `${changeSecondName ? 'none' : 'block'}` }}>
              Константин{' '}
              <ChangeLink onClick={val => this._handlerChangeName(val, 'changeSecondName')}>изменить</ChangeLink>
            </p>
            <InputWrap
              hidden={!changeSecondName}
              onBlur={val => this._handlerChangeRequest(val, 'changeSecondName')}
              ref={this.changeSecondName}
            />

            <p>marsov-v@mail.ru</p>
          </PersonalInfo>
        </PersonalWrap>
      </PersonalContainer>
    );
  }
}

PersonalSettings.propTypes = {
  changeInfoRequest: PropType.func,
};

export default PersonalSettings;
