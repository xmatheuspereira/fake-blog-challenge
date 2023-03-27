import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function PostCard({ title, image }) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostCard;
