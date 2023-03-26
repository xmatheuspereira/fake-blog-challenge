import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../services/api';
// import './UserDetailsPage.css';

function UserDetailsPage() {
  const { id } = useParams();

  const { data: user, isLoading, isError } = useQuery(['user', id], () => getUserDetails(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error ao buscar detalhes do usuário</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>{user.data.name}</Card.Title>
              <Card.Text>
                <strong>Username: </strong>
                {user.data.username}
              </Card.Text>
              <Card.Text>
                <strong>Email: </strong>
                {user.data.email}
              </Card.Text>
              <Card.Text>
                <strong>Phone: </strong>
                {user.data.phone}
              </Card.Text>
              <Card.Text>
                <strong>Website: </strong>
                {user.data.website}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Address</Card.Title>
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
              <Card.Title>Company</Card.Title>
              <Card.Text>{user.data.company.name}</Card.Text>
              <Card.Text>{user.data.company.catchPhrase}</Card.Text>
              <Card.Text>{user.data.company.bs}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetailsPage;
