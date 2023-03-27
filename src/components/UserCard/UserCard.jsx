import React, { useState } from 'react';
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

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const [color] = useState(() => generateRandomColor());

  return (
    <Card onClick={handleClick} className="user-card">
      <Avatar
        name={username}
        color={color}
        size="150"
        round
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
