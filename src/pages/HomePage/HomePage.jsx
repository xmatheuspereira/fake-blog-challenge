import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../../services/api';
import PostCard from '../../components/PostCard/PostCard';

function HomePage() {
  const [visiblePosts, setVisiblePosts] = useState(10);

  const { data: posts, isLoading } = useQuery('posts', getPosts);

  const loadMore = () => {
    setVisiblePosts(visiblePosts + 10);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <InfiniteScroll
          dataLength={visiblePosts}
          next={loadMore}
          hasMore={visiblePosts < 100}
          loader={<h4>Loading...</h4>}
          endMessage={(
            <p style={{ textAlign: 'center' }}>
              <b>Yay! Você viu todos os posts!</b>
            </p>
          )}
        >
          {posts.data.slice(0, visiblePosts).map((post) => (
            <Col key={post.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/post/${post.id}`}>
                <PostCard
                  title={post.title}
                  image="https://via.placeholder.com/300x200"
                />
              </Link>
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default HomePage;
