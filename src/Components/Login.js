//Login Page display

import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import { Form, Input, Button, Checkbox} from 'antd';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import { setCookie } from "../Cookies";
//import AuthenticationLogin from "../AuthLoginJWT/AuthenticationLogin";


class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          isUserNotExists: false
          //currentUser: null
      };
      // redirect to home if already logged in
      /*if (authenticationService.currentUserValue) { 
      this.props.history.push('/');
    }*/
  }

/*componentDidMount() {
    authenticationLogin.currentUser.subscribe(x => this.setState({ currentUser: x }));
}*/

  responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);
    window.location.href = 'http://localhost:3000/home';
  }

     
render() {
  const onFinish = (values) => {
    console.log('Success:', values);

    var url = 'http://localhost:8080/login?username='+values.username+'&pwd='+values.password;
      
      // x.then(data => {
      //   if(data > 0)
      //   {
      //     this.props.history.push('/SecurityCode')
      //   }
      // });
      fetch(url)
      .then(res => res.text())
      .then(data => {
         
          if(!isNaN(data))
          {
            var val = parseInt(data);
            if(val > 0)
            {
              this.props.history.push('/home')
              this.setState({isUserNotExists: false}) 
              setCookie('currentUserId', val);
            }
            else{
              this.setState({isUserNotExists: true}) 
            }
           
          }
          else if(data == 'Error: No user found')
          {
            this.setState({isUserNotExists: true}) 
          }
        })
        .catch(err => {this.setState({isUserNotExists: true}); console.log(this.state.isUserNotExists);
          console.log('in error')
        })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
 return (
    <div className="Div-form">
      { this.state.isUserNotExists ? <div className='user-already-present'>User not found</div> : <div></div>}
    <Form className="login-form"
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
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit" className="Login-button">
          Sign In
        </Button>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div>
          <GoogleLogin
          clientId="48185425813-60iv6vd4qad5o6o8orre8qsl6bvdpgia.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        </div>
      </Form.Item>
      
      <div className="Sign-up">
      <Link to='/forgotpassword'>
        <a className="Forgot-password" href="./components/ForgotPassword.js">Forgot password</a>
        </Link>
        <Link to='/signup'>
        <a href="./components/SignUp.js" id="Sign-up-link">SignUp</a>
        </Link>
        </div>
    </Form>
    </div>
  );
}
}

export default Login;