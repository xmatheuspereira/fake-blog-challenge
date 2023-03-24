import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({ id, username }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  return (
    <Card onClick={handleClick} className="user-card">
      <Card.Img
        src="https://via.placeholder.com/150"
        className="user-avatar"
      />
      <Card.Body>
        <Card.Title className="user-name">{username}</Card.Title>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserCard;
