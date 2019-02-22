import React from "react";
import { connect } from "react-redux";

import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, is_autenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      is_autenticated ? (
        <Component {...props} />
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
