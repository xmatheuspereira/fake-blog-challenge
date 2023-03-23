import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import PostsPage from './pages/PostsPage';
// import UsersPage from './pages/UsersPage';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/posts" component={PostsPage} />
          <Route path="/users" component={UsersPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
