import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Detail from './components/details';
import Home from './components/home';
import NavBar from './components/navbar/index';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
     <BrowserRouter>
            <Switch>
                <Route path="/phones/:id" component={Detail} />
                <Route path="/phones" component={Home} />
                <Redirect from="/" to="/phones" />
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
