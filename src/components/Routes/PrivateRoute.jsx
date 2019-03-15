import React from "react";
import {
  toastr
} from 'react-redux-toastr';
import { connect } from "react-redux";

import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, role, is_autenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      is_autenticated ? (
        <Component {...props} readOnly={rest.readOnly || false} />
      ) : (
          <React.Fragment>
            {toastr.error('Erro', 'Por favor, faça o login para acessar a área privada')}
            <Redirect to="/login" />
          </React.Fragment>
        )
    }
  />
);

const mapStateToProps = state => ({
  is_autenticated: state.auth.valid_token
});

// export default connect(mapStateToProps,null)(PrivateRoute);
export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
  )(PrivateRoute)
);
