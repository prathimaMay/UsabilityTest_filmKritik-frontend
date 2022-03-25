//This file holds the logic of displaying reviews in reviews page

import React from "react";
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import Comments from "./Comments";
import Navbar from "./Navbar";

const ReviewCard = ({ id, content, author, author_details, updated_at }) => {

        console.log(author_details.avatar_path);
        const avatar_path = author_details.avatar_path.substring(1, author_details.avatar_path.length-1)
        console.log(avatar_path);
        console.log(updated_at);

        const data = [
            {
              actions: [<span key="comment-list-reply-to-0"><Comments /></span>],
              author: `${author}`,
              avatar: `${avatar_path}`,
              content: 
                <p>
                  {content}
                </p>
              ,
              updatedat: (
                <Tooltip>
                  <span>{updated_at}</span>
                </Tooltip>
              )
            }
            ];
          
          return(
              <div>
            <List
              className="comment-list"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <li>
                  <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    updatedat={item.updatedat}
                  />
                </li>
              )}
            />
            </div>
          );
}

export default ReviewCard;