import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  FaUser, FaEnvelope, FaPhone, FaGlobe, FaLocationArrow, FaBuilding,
} from 'react-icons/fa';
import Avatar from 'react-avatar';
import { getUserDetails } from '../../services/api';
import './UserDetailsPage.css';

function UserDetailsPage() {
  const { id } = useParams();

  const { data: user, isLoading, isError } = useQuery(['user', id], () => getUserDetails(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error ao buscar detalhes do usuário</div>;
  }

  const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <Container className="container-user-details">
      <Row>
        <Col>
          <Card>
            <Avatar
              name={user.data.name}
              color={generateRandomColor()}
              round
              size="250"
              className="user-avatar"
            />
            <Card.Body>
              <Card.Title className="user-name">{user.data.name}</Card.Title>
              <Card.Text>
                <FaUser className="main-icons" />
                {user.data.username}
              </Card.Text>
              <Card.Text>
                <FaEnvelope className="main-icons" />
                {user.data.email}
              </Card.Text>
              <Card.Text>
                <FaPhone className="main-icons" />
                {user.data.phone}
              </Card.Text>
              <Card.Text>
                <FaGlobe className="main-icons" />
                {user.data.website}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title><FaLocationArrow /></Card.Title>
              <Card.Text>
                {user.data.address.street}
                ,
                {' '}
                {user.data.address.suite}
              </Card.Text>
              <Card.Text>{user.data.address.city}</Card.Text>
              <Card.Text>{user.data.address.zipcode}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title><FaBuilding /></Card.Title>
              <Card.Text>{user.data.company.name}</Card.Text>
              <Card.Text className="company-info">{user.data.company.catchPhrase}</Card.Text>
              <Card.Text className="company-info">{user.data.company.bs}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetailsPage;
