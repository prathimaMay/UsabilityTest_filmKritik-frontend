//to get all security questions during Forgot password phase from backend 

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, message, Form, Input, Checkbox } from 'antd';
import AuthenticationService from './AuthenticationService';

class SecurityCode extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        securitycode: '',
        securityQuestions: [],
        sq_A: {}
    }
}

componentDidMount() 
{
  
  fetch('http://localhost:8080/getAllSecurityQuestions')
    .then(res => res.json())
    .then(data => {
        // this.setState({ securityQuestions: data});
      });
}

  render()
  {

    const onFinish = (values) => {
      var sdata = {
        securityCode: values.securitycode,
        sq_A: {
          'what is your pet name?' : values.securityquestionAnswer
        }
      }
      // AuthenticationService.postAPI('verifyUserData', sdata);
      this.props.history.push('/ConfirmPassword');
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
            label="Security Code"
            name="securitycode"
            rules={[
              {
                required: true,
                message: 'Please enter the security code sent to you Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
           
          <Form.Item
            label='what is your pet name?'
            name="securityquestionAnswer"
            rules={[
              {
                required: true,
                message: 'Please answer the Security question!',
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
          Verify User
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

}
}

export default SecurityCode;