import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import RegisterScreen from '../views/RegisterScreen';
import SigninScreen from '../views/SigninScreen';
import ProjectScreen from '../views/ProjectScreen';
import '../styles/Main.css';

function Main() {
  return (
    <div className="main-container">
      <Route path="/project/:id" component={ProjectScreen} exact />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/" component={HomeScreen} exact />
    </div>
  );
}

export default Main;
