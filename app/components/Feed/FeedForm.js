import React, { Component } from 'react';
import { Input, Form, Button } from '../../../node_modules/antd';
/* eslint-disable */
class FeedForm extends Component {
  _handlerSubmit = () => {};
  _handlerOnChange(ev, attr) {
    const { feedForm, feedFormChange } = this.props;
    feedFormChange({ ...feedForm, [attr]: ev.currentTarget.value });
  }
  render() {
    const { feedForm } = this.props;
    const { title, content } = feedForm;
    return (
      <div>
        <Form onSubmit={this._handlerSubmit}>
          <Input
            value={title}
            addonBefore="Заголовок"
            defaultValue=""
            onChange={ev => this._handlerOnChange(ev, 'title')}
          />
          <Input.TextArea
            value={content}
            addonBefore="Заголовок"
            defaultValue=""
            onChange={ev => this._handlerOnChange(ev, 'content')}
          />
          <Button type="submit">Отправить</Button>
        </Form>
      </div>
    );
  }
}

export default FeedForm;
