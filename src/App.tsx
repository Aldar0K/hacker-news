import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage from 'pages/MainPage';
import StoryPage from 'pages/StoryPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/story" component={StoryPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Layout>
  );
};

export default App;
