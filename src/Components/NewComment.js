/*
    Newcomment that the user can provide in reviews page
  */
    import { Comment, Avatar, Form, Button, List, Input } from 'antd';
    import moment from 'moment';
    import React from "react";
import { getCookieComment } from '../Cookies';
    
    class NewComment extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          editMode: false
        }
      }    
            
        renderCommentRead = () => {
          // var x = getCookieComment('ReviewComment');
          // var getComment = JSON.parse(x);
          // console.log(getComment);
         return (
           <div className="comment-text">
                {/* <p>{this.props.details.commentBody}</p> */}
                <p>{this.props.details.commentBody}</p>
           </div>
         ) 
        };
        
        editCommentHandler = (event) => {
          event.preventDefault();
          
          this.props.editComment(this.props.index, this.refs.editText.value);
              
          this.setState({
            editMode: false
          });
          
        };
        
        deleteCommentHandler = () => {
          
          this.props.deleteComment(this.props.index);
          
        };
        
        renderCommentEdit = () => {

          var x = getCookieComment('ReviewComment');
          var getComment = JSON.parse(x);
          console.log(getComment);
          // var new_rating = RMovies[RMovies.length-1];
          // var movie_id = RMovies.substring(0,RMovies.length-1);
          // var x = JSON.parse(new_rating);
         return (
           <div>
           <div>{console.log(this.props.details.commentBody)}</div>
           <form ref="commentForm" onSubmit={this.editCommentHandler}>
             <textarea className="text-area-edit" ref="editText" required>{this.props.details.commentBody}</textarea>&nbsp;&nbsp;&nbsp;
             <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Done</button>
           </form>
           </div>
         ) 
        };
        
        enterEditMode = () => {
          var getComment = getCookieComment('ReviewComment');
          console.log(getComment);
          if (!this.state.editMode){
            this.setState({
              editMode: true
            });
          }
        };
        
        render () {
          return (
            <div className="block-comment-content module text">
              <div className="comment-user">
                <div className="comment-user-avatar-wrap">
                  <a>
                    {<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                  </a>
                </div>
                <div className="comment-user-text">
                  <a href="#0" data-username="cathbailh" className="comment-username">
                      <span className="username">
                        {this.props.details.commentName}
                      </span>
                  </a>
                  <span className="on"> on </span>
                  <a href="#0">
                    <time>
                      {/* {(new Date()).getTime()} */}
                      {moment().format("DD-MM-YYYY hh:mm:ss")}
                    </time>
                  </a>
                  <span className="edit-comment">
                    <i id="edit-id" className="fa fa-pencil edit-btn" onClick={this.enterEditMode}></i>
                    <i id="delete-id" className="fa fa-trash-o del-btn" onClick={this.deleteCommentHandler}></i>
                  </span>
                </div>
              </div>
              { this.state.editMode ? this.renderCommentEdit() : this.renderCommentRead() }
            </div>
            
          );
        }
      }

      export default NewComment;