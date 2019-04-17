import React, { Component } from 'react';
import { Input, Form, Button } from '../../../node_modules/antd';
/* eslint-disable */
class FeedForm extends Component {
  _handlerSubmit = () => {
    const { feedCreateRequest, feedForm } = this.props;
    feedCreateRequest(feedForm);
  };
  _handlerOnChange(ev, attr) {
    const { feedForm, feedFormChange } = this.props;
    feedFormChange({ ...feedForm, [attr]: ev.currentTarget.value });
  }
  render() {
    const { feedForm } = this.props;
    const { title, content } = feedForm;
    return (
      <div>
        <Form >
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
          <Button onClick={this._handlerSubmit}>Отправить</Button>
        </Form>
      </div>
    );
  }
}

export default FeedForm;
