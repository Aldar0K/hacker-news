import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage from 'pages/MainPage';
import StoryPage from 'pages/StoryPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/stories/:id" component={StoryPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
