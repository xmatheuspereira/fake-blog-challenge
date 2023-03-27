import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../../services/api';
import PostCard from '../../components/PostCard/PostCard';
import './HomePage.css';

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
    <Container className="container-posts">
      <Row>
        <InfiniteScroll
          className="post-grid"
          dataLength={visiblePosts}
          next={loadMore}
          hasMore={visiblePosts < 100}
          loader={<h4>Loading...</h4>}
        >
          {posts.data.slice(0, visiblePosts).map((post) => (
            <Link to={`/post/${post.id}`}>
              <PostCard
                title={post.title}
                image={`https://source.unsplash.com/random/300x200?sig=${post.id}`}
              />
            </Link>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default HomePage;
