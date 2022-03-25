//File for Confirm Password in Login page

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, message, Form, Input, Checkbox } from 'antd';
import AuthenticationService from './AuthenticationService';


class ConfirmPassword extends Component{
  constructor(props) {
    super(props);

  }

  render()
  {

    const onFinish = (values) => {
      console.log('Success:', values);
      if(values.newpassword === values.confirmpassword)
      {
        // AuthenticationService.postAPI('updateUser', {password: values.password});
        this.props.history.push('/');
      }

      };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
  return (
    <div className='signup-container'>        
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout='vertical'
    >
          <Form.Item
            label="NewPassword"
            name="newpassword"
            rules={[
              {
                required: true,
                message: 'Please enter new password!',
              },
            ]}
          >
          <Input.Password />
          </Form.Item>
          
          <Form.Item
            label="ConfirmPassword"
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: 'Please confirm password!',
              },
            ]}
          >
          <Input/>
          </Form.Item>
          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="Login-button">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

}
}

export default ConfirmPassword;