import React from 'react';
import { Route } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import HomeScreen from '../views/HomeScreen';
import RegisterScreen from '../views/RegisterScreen';
import SigninScreen from '../views/SigninScreen';
import ProjectScreen from '../views/ProjectsScreen';
import '../styles/Main.css';

function Main() {
  return (
    <div className="main-container">
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <AdminRoute
        path="/productlist"
        component={ProjectsListScreen}
      />
      <Route path="/" component={HomeScreen} exact />
    </div>
  );
}

export default Main;
