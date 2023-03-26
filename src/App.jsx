import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
// import PostsPage from './pages/PostsPage';
import UsersPage from './pages/UsersPage/UsersPage';
import UserDetailsPage from './pages/UserDetails/UserDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/posts" component={PostsPage} /> */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
