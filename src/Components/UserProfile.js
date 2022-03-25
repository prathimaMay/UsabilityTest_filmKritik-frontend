//User profile page from Navbar

import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import AuthenticationService from "./AuthenticationService";
import {setCookie, getCookie } from '../Cookies.js'

import { Steps, Tabs, Button, message, Form, Input, Checkbox, Select, Menu, Dropdown, Space, Tooltip } from 'antd';


const {  TabPane  } = Tabs

const Img_API = "https://image.tmdb.org/t/p/w1280";

function callback(key) {
    console.log(key);
  }

const UserProfile = () => {   
    const [form] = Form.useForm();

const [ likedMoviesDetails, setLikedMovies ] = useState([]);
const [ likedTvshowsDetails, setLikedTVShows ] = useState([]);
const [ watchlistDetails, setWatchList ] = useState([]);
const [ historyDetails, setHistory ] = useState([]);

const RemoveItemFromWatchList = (value) => {
  var z = JSON.parse(getCookie('watchList'));
  var newL = z.filter(function(p) { 
    return p.id !== value.id 
  });
  console.log(newL)
  setWatchList(newL);
  setCookie('watchList', JSON.stringify(newL), 5);
}

const RemoveLikedMovie = (value) => {
    // setLikedMovies(likedMoviesDetails.filter(function(p) { 
    //   return p.id !== value.id 
    // }));
    // AuthenticationService.postAPI('removeLikedMovie', {id: value.Id})
    var z = JSON.parse(getCookie('likedMovies'));
    var newL = z.filter(function(p) { 
      return p.id !== value.id 
    });
    console.log(newL)
    setLikedMovies(newL);
    setCookie('likedMovies', JSON.stringify(newL), 5);
}

const RemoveLikedTVShow = (value) => {

  var z = JSON.parse(getCookie('likedTvShows'));
  var newL = z.filter(function(p) { 
    return p.id !== value.id 
  });
  console.log(newL)
  setLikedTVShows(newL);
  setCookie('likedTvShows', JSON.stringify(newL), 5);
}

const onFinish = (values) => {

   var uId = getCookie('currentUserId')
    var param = {
      firstname: values.firstname,
      lastname: values.lastname,
      phonenumber: values.phonenumber,
      email: values.email,
      password: values.password,
      id: uId && uId > 0 ? uId : 0
    }
    console.log(param);
    console.log('onFinish')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(param)
  };

    fetch('http://localhost:8080/UpdateUser', requestOptions)
    .then(response => {console.log(response); return response.text() ;})
    .then(data => {
      if(data+"" == "Success")
      {
        alert("User details updated");
      }
    });
    

  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


useEffect(() => {

    var y = getCookie('likedMovies');
    setLikedMovies(JSON.parse(y))

    var z = getCookie('likedTvShows');
    setLikedTVShows(JSON.parse(z))

    var k = getCookie('watchList');
    setWatchList(JSON.parse(k))

    var f  = getCookie('fhistory')
    setHistory(JSON.parse(f));


    var currentUserId = getCookie('currentUserId');

    fetch('http://localhost:8080/getUserDetails?userId='+currentUserId)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        form.setFieldsValue({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.username,
          phonenumber: data.phoneno,
          password: data.password,
          userId: data.id
    });
    });
  

}, []);

return(  
    <div>
    <div>
        <Navbar />
    </div>
    <div className='user-profile-container'>
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Edit Profile" key="1">
        <Form
      name="basic"
      form={form}
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
          <Input />
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
          <Input />
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
          <Input />
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
            <Input />
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
          <Input.Password />
          </Form.Item>
          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
       <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Liked Movies" key="2">
        <div className="movie-top-header">
            {
                likedMoviesDetails && likedMoviesDetails.map( movie => 
                <div className="movie-header">
                  <div>
                  <img src={Img_API + movie.imgPath} alt={movie.name} />  
                    <div className="movie-name">{movie.name}</div>
                  </div>
                    <Button type="primary"  onClick={() => RemoveLikedMovie(movie)}>
          Remove
        </Button>
                </div>
                )
            }
        </div>
        </TabPane>
        <TabPane tab="Liked TV Shows" key="3">
        <div className="movie-top-header">
            {
                likedTvshowsDetails && likedTvshowsDetails.map( movie => 
                <div className="movie-header">
                  <div>
                  <img src={Img_API + movie.imgPath} alt={movie.name} />  
                    <div className="movie-name">{movie.name}</div>
                  </div>
                    <Button type="primary"  onClick={() => RemoveLikedTVShow(movie)}>
          Remove
        </Button>
                </div>
                )
            }

        </div>
        </TabPane>
        <TabPane tab="Watchlist" key="4">
        <div className="movie-top-header">
            {
                watchlistDetails && watchlistDetails.map( movie => 
                <div className="movie-header">
                  <div>
                  <img src={Img_API + movie.imgPath} alt={movie.name} />  
                    <div className="movie-name">{movie.name}</div>
                  </div>
                    <Button type="primary"  onClick={() => RemoveItemFromWatchList(movie)}>
          Remove
        </Button>
                </div>
                )
            }

        </div>
        </TabPane>
        <TabPane tab="History" key="5">
            {historyDetails && historyDetails.map(history => 
            <div className='history-container'>
            <div><b>{history.action_description}</b></div>
            <div className="history-date">{history.action_date}</div>
            </div>
            )}
        </TabPane>
    </Tabs>
    </div>
  </div>
);
}

export default UserProfile;