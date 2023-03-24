import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getUsers } from '../../services/api';
import UserCard from '../../components/UserCard/UserCard';
import './UsersPage.css';

function UsersPage() {
  const { data: users, isLoading, isError } = useQuery('users', getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error ao buscar usuários</div>;
  }

  return (
    <Container className="container-users">
      <Row className="mt-4 users-grid">
        {users.data.map((user) => (
          <UserCard key={user.id} id={user.id} username={user.username} />
        ))}
      </Row>
    </Container>
  );
}

export default UsersPage;
