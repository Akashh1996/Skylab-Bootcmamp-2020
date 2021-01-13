/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { Hidden, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import './Components/Header/Header.css';
import './Components/Footer/footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import DrawerBox from './Components/DrawerBox/DrawerBox';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DashboardScreen from './views/DashboardScreen/DashboardScreen';
import ListScreen from './views/ListScreen/ListScreen';
import DetailScreen from './views/DetailScreen2/DetailScreen';
import LoginScreen from './views/LoginScreen/LoginScreen';
import CreateChallengeScreen from './views/CreateChallengeScreen/CreateChallengeScreen';
import DonateScreen from './views/DonateScreen/DonateScreen';
import AdminScreen from './views/AdminScreen/AdminScreen';
import StripeScreen from './views/StripeScreen/StripeScreen';

import generateStore from './redux/generateStore';
import { auth } from './Firebase/firebase';

import themeConfig from './themeConfig';

const theme = themeConfig;

const store = generateStore();

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}));

function App() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const openAction = () => {
    setOpen(!open);
  };

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (localStorage.getItem('user')) {
      const userStorage = JSON.parse(localStorage.getItem('user'));
      if (userStorage?.uid === firebaseUser?.uid) {
        return <Route component={component} path={path} {...rest} />;
      }

      return <Redirect to="/login" {...rest} />;
    }

    return <Redirect to="/login" {...rest} />;
  };

  return firebaseUser !== false ? (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header openAction={openAction} />
          <Hidden>
            <DrawerBox
              variant="temporary"
              open={open}
              onClose={openAction}
            />
          </Hidden>
          <div className={classes.content}>
            <div className={classes.toolbar} />
          </div>
          <Switch>
            <Route path="/stripe" component={StripeScreen} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/donate" component={DonateScreen} />
            <Route path="/create" component={CreateChallengeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/challenges/:challengeId" component={DetailScreen} />
            <Route path="/challenges" component={ListScreen} />
            <PrivateRoute path="/" exact component={DashboardScreen} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  ) : (<div>CARGANDO...</div>);
}

export default App;
