/*
    Add comment Form
    <AddCommentForm />
  */

    import { Comment, Avatar, Form, Button, List, Input } from 'antd';
    import moment from 'moment';
    import React from "react";
    import {setCookieComment, getCookieComment } from '../Cookies.js';
    
    class AddCommentForm extends React.Component {    

    constructor (props) {
      super(props);
      this.state = {
        name: "",
        desc: ""
      }
    }
        processComment = (event) => {
          event.preventDefault();
          console.log("Hello Process comment");
      console.log(this.state.name);
          // 1. Take data from form
          var commentData = {
            commentName: this.state.name,
            commentBody: this.state.desc
          }

          setCookieComment('ReviewComment', JSON.stringify(this.state.desc), 2);
      
          // 2. Pass data back to App
          this.props.addComment(commentData);
          
          // 3. Reset the form
          this.refs.commentForm.reset();
          
        }

        onNameChange = (e) => {
          this.setState({name:e.target.value})
          console.log(this.state.name)
        }

        onDescChange = (e) => {
          this.setState({desc:e.target.value})
          console.log(this.state.desc)

        }
        
        render () {
          return (
            <div>
              <h4 className="leave-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add a Comment</h4>
              <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" ref="name" placeholder="Your Name" required onChange={this.onNameChange}/><p></p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <textarea ref="desc" placeholder="Add your comment here" required onChange={this.onDescChange}/><p></p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button id="submit" htmlType="submit" type="primary" className="button button-outline comment-button action-button expand-right">
                  Add Comment
                </Button>

                
              </form>
            </div>
          );

        }
      }
      
      export default AddCommentForm;