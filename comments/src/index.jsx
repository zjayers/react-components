import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const comments = [
  {
    author: 'Tooty', time: 'Today at 6:00PM', text: 'Nice blog post', avatar: faker.image.avatar(),
  },
  {
    author: 'Sam', time: 'Today at 7:00PM', text: 'It\'s pretty gross', avatar: faker.image.avatar(),
  },
  {
    author: 'Haribo', time: 'Today at 8:00PM', text: 'Where are you', avatar: faker.image.avatar(),
  },
];

ReactDOM.render(
  <div className="ui container comments">
    {comments.map(({
      author, time, text, avatar,
    }) => (
      <ApprovalCard>
        <CommentDetail
          author={author}
          time={time}
          text={text}
          avatar={avatar}
        />
      </ApprovalCard>
    ))}
  </div>,
  document.querySelector('#root'),
);
