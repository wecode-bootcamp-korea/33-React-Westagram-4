import React, { Component } from 'react';
import { render } from 'sass';

class Comment extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((comment, i) => {
          return (
            <li key={i}>
              <span>user{i}</span>
              {comment}
            </li>
          );
        })}
      </div>
    );
  }
}

export default Comment;
