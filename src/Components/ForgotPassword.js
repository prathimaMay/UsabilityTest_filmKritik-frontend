////File for Forgot Password in Login page

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, message, Form, Input, Checkbox } from 'antd';
import AuthenticationService from './AuthenticationService'

class ForgotPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
        userId: 0,
        userName: '',
        sqQuestionId: '',
        sqAnswer: '',
        securityQuestion: {}
    }
  }

  render()
  {

    const onFinish = (values) => {
      console.log('Success:', values);
      // var x = AuthenticationService.postAPI('forgot/verifyUser', {username: values.username})
      var url = 'http://localhost:8080/forgot/verifyUser?username='+values.username;
      
      // x.then(data => {
      //   if(data > 0)
      //   {
      //     this.props.history.push('/SecurityCode')
      //   }
      // });
      fetch(url)
      .then(res => res.json())
      .then(data => {
          this.setState({ userId: data});
          // AuthenticationService.postAPI('securityCode', {userId: data});
          if(data > 0)
          {
            this.props.history.push('/securityCode')
          }
        });
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter your User Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>    
         
          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="Login-button">
          Verify User
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

}
}

export default ForgotPassword;