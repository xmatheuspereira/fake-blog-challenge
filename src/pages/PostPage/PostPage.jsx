import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getPostById, getComments } from '../../services/api';
import CommentCard from '../../components/CommentCard/CommentCard';

function PostPage() {
  const { id } = useParams();

  const { data: post, isLoading: postLoading } = useQuery(['post', id], () => getPostById(id));
  const { data: comments, isLoading: commentsLoading } = useQuery(
    ['comments', id],
    () => getComments(id),
  );

  if (postLoading || commentsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{post.data.title}</h1>
          <p>{post.data.body}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Comments</h2>
          {comments.data.map((comment) => (
            <CommentCard key={comment.id} email={comment.email} body={comment.body} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
