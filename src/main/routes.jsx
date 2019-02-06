import React from 'react';

// import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './app.jsx';
import Pagina404 from '../common/template/Pagina404'

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/404" component={Pagina404} />

            <Redirect from='*' to='/404' />
        </Switch>
    </Router>
)