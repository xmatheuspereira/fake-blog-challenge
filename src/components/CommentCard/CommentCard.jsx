import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Avatar from 'react-avatar';
import './CommentCard.css';

function CommentCard({ email, body, avatarColor }) {
  return (
    <div className="comment">
      <div className="d-flex">
        <Avatar size="40" round name={email} color={avatarColor} />
        <Card.Subtitle className="avatar-email">
          <span>{email}</span>
        </Card.Subtitle>
      </div>
      <Card.Text className="comment-body">{body}</Card.Text>
    </div>
  );
}

CommentCard.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatarColor: PropTypes.string.isRequired,
};

export default CommentCard;
