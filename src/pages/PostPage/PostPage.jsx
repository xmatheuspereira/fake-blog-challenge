import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getPostById, getComments } from '../../services/api';
import CommentCard from '../../components/CommentCard/CommentCard';
import './PostPage.css';

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

  const randomAvatarColor = () => {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Container className="post-container">
      <Row>
        <Col>
          <div className="post-header">
            <img
              className="post-image"
              src={`https://source.unsplash.com/random/300x200?sig=${post.data.id}`}
              alt=""
            />
            <h1>{post.data.title}</h1>
          </div>
          <p>{post.data.body}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="section-divider" />
          <h2 className="comments-section">Comments</h2>
          {comments.data.map((comment) => (
            <CommentCard
              key={comment.id}
              email={comment.email}
              body={comment.body}
              avatarColor={randomAvatarColor()}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
