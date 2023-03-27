import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({ id, username }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  return (
    <Card onClick={handleClick} className="user-card">
      <Avatar name={username} colors={['#a1c2fa', '#e6e8fa']} size="150" round className="user-avatar" />
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
