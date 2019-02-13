import React from 'react';

import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Pagina404 from '../../common/template/Pagina404'
import Dashboard from '../Dashboard/Dashboard'
import Auth from '../Auth/Auth'

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/404" component={Pagina404} />
            
            <PrivateRoute path="/dashboard" component={Dashboard} />
            
            <Redirect from='*' to='/404' />
        </Switch>
    </Router>
)