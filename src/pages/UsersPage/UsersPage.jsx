import React from 'react';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUsers } from '../../services/api';

function UsersPage() {
  const navigate = useNavigate();
  const { data: users, isLoading, isError } = useQuery('users', getUsers);

  const handleClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error ao buscar usuários</div>;
  }

  return (
    <Container>
      <Row className="mt-4">
        {users.data.map((user) => (
          <Col key={user.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Button variant="primary" onClick={() => handleClick(user.id)}>
                  Ver detalhes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UsersPage;
