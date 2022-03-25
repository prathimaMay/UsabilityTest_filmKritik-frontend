
//Signup page 


import React, { Component, useState } from 'react';

import 'antd/dist/antd.css';
import { Steps, Button, message, Form, Input, Checkbox, Select, Menu, Dropdown, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  SignUpRepository from '../Repository/SignUp'
import { useHistory, Link } from "react-router-dom";
import { setCookie } from '../Cookies';

const { Option } = Select;


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        password: '',
        sQuestionId: 0,
        sQuestionAnswer: '',
        genresSelected: '',
        securityQuestions: [],
        genres: [],
        current: 0,
        isUserAlreadyExists: false,
        regResult: ''
    }
  }

  

  componentDidMount() 
  {
    fetch('http://localhost:8080/getAllSecurityQuestions')
    .then(res => res.json())
    .then(data => {
        this.setState({ securityQuestions: data});
      });

    fetch('http://localhost:8080/getGenre')
    .then(res => res.json())
    .then(data => {
        this.setState({ genres: data.results});
    });

console.log(this.props)

  }


render()
{

    const onFinish = (values) => {
      var param = {
        firstname: values.firstname,
        lastname: values.lastname,
        phonenumber: values.phonenumber,
        email: values.email,
        password: values.password,
        sq_A: {
          [values.securityquestion] : values.securityquestionAnswer
        },
        genre: values.genres,
      }
      console.log(param);
      console.log('onFinish')
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(param)
    };
   
    fetch('http://localhost:8080/register', requestOptions)
        .then(response => {console.log(response); return response.text() ;})
        .then(data => {
          if(data+"" == "User Already Present")
          {
            this.setState({isUserAlreadyExists: true})
          }
          else if (!isNaN(this.state.regResult)){    
            this.setState({isUserAlreadyExists: false}) 
              setCookie('currentUserId', data+'');
              this.props.history.push('/');
          }
        });
     
        
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const handleGenreChange = (value) => {
        console.log(`selected ${value}`);
    }

    const handleSQChange = (value) => {
      console.log(`selected ${value}`);
    }
    const createAccount = () => {

    }
    
    return (
      
        <div className='signup-container'>
          { this.state.isUserAlreadyExists ? <div className='user-already-present'>User Already Exist</div> : <div></div>}
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
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
            <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please enter your First Name!',
              },
            ]}
          >
          <Input value={this.state.firstname}/>
          </Form.Item>
    
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please enter your Last Name!',
              },
            ]}
          >
          <Input value={this.state.lastname}/>
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Please enter your Phone Number!',
              },
            ]}
          >
          <Input value={this.state.phonenumber}/>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your Email!',
              },
            ]}
          >
            <Input value={this.state.email}/>
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
          <Input.Password value={this.state.password}/>
          </Form.Item>
          <Form.Item
      label="Setup Security Question"
      name="securityquestion"
        rules={[
          {
            required: true,
            message: 'Please select a security question!',
          },
        ]}
      >
        <Select
                  mode="single"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Select Security Question"
                  onChange={handleSQChange}
                >
                  {this.state.securityQuestions && this.state.securityQuestions.map((q) => <Option key={q.id}>{q.question}</Option>)}
      </Select>  
      </Form.Item>
      <Form.Item
      label="Security Question Answer"
      name="securityquestionAnswer"
        rules={[
          {
            required: true,
            message: 'Please enter your Answer!',
          },
        ]}
      >
      <Input placeholder="Enter answer for above question" value={this.state.sQuestionAnswer}/>
        </Form.Item>
      <Form.Item
      label="Setup Genres"
      name="genres"
        rules={[
          {
            required: true,
            message: 'Please select genres!',
          },
        ]}
      >
      <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Select Generes"
                  onChange={handleGenreChange}
                >
                  {this.state.genres && this.state.genres.map((genere) => <Option key={genere.id}>{genere.name}</Option>)}
                </Select>
                </Form.Item>
                <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

       <Button type="primary" htmlType="submit" className='create-account'>

          Create Account
        </Button>
      </Form.Item>
      </Form>
      
      </div>
    );
}
}
export default SignUp;