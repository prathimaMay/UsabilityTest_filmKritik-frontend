//Comments on Movie or TV Show reviews

import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from "react";
import {setCookieComment, getCookieComment } from '../Cookies.js';
import NewComment from './NewComment';
import AddCommentForm from './AddCommentForm';

export default class Comments extends React.Component {

    state= {
        comments: {}
      };
    
    addComment= (commentData) => {
      
      var timeStamp = (new Date()).getTime();
      console.log(timeStamp);
      
      this.state.comments['comment-id'+ timeStamp] = commentData;
      console.log(commentData);

      this.setState({
        comments: this.state.comments
      });
      console.log(commentData);
    };
    
    editComment= (commentID, editedData) => {

      this.state.comments[commentID].commentBody = editedData;
      this.setState({
        comments: this.state.comments
      });
      
      console.log("Edited text:",editedData);
      
    };
    
    deleteComment = (commentID) => {
  
      delete this.state.comments[commentID];
      
      this.setState({
        comments: this.state.comments
      });
      
    };
    
    renderComment = (key) => {
      return (
         <li className="">
      <NewComment key={key} index={key} details={this.state.comments[key]} editComment={this.editComment} deleteComment={this.deleteComment}/>
        </li>
      )
    };
    
    render () {
      return (
        //   <div className="row medium-8 large-7 columns">
        <div>
            
                  {
                Object
                  .keys(this.state.comments)
                   // Creating a NEW array
                  .map(this.renderComment)
              }
            
            <AddCommentForm addComment={this.addComment}/>

            
          
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
          
          </div>
      );
    }
}