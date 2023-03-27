import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CommentCard({ email, body }) {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

CommentCard.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentCard;
