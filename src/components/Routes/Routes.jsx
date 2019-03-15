import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Pagina404 from "../../common/template/Pagina404";
import Dashboard from "../Dashboard/Dashboard";
import Auth from "../Auth/Auth";
import Users from "../Users/Users";
import FormUsuario from "../Users/FormUsuario";
import Configuracoes from "../Configuracao/Configuracao";
import Tratamento from "../Tratamento/Tratamento";

export default props => (
    <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/404" component={Pagina404} />

        <PrivateRoute
            path="/dashboard"
            role={["admin"]}
            component={Dashboard}
        />
        <PrivateRoute exact path="/users" role={["admin"]} component={Users} />
        <PrivateRoute
            exact
            path="/configuracoes"
            role={["admin", "usuario"]}
            component={Configuracoes}
        />
        <PrivateRoute
            exact
            path="/users/create"
            role={["admin"]}
            component={FormUsuario}
        />
        <PrivateRoute
            path="/users/update/:userId"
            role={["admin"]}
            component={FormUsuario}
        />
        <PrivateRoute
            path="/users/:userId/tratamentos"
            role={["admin"]}
            component={Tratamento}
        />
        <PrivateRoute
            path="/users/delete/:userId"
            role={["admin"]}
            readOnly={true}
            component={FormUsuario}
        />

        <Redirect from="*" to="/404" />
    </Switch>
);
