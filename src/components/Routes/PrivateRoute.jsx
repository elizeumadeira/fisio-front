import React from "react";
import { connect } from "react-redux";

import { Route, Redirect, withRouter } from "react-router-dom";

// class PrivateRoute extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       component: props.component
//     };
//   }

//   render() {
//     return (
//       <Route
//         render={props =>
//           this.props.is_autenticated ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
// }

const PrivateRoute = ({ component: Component, is_autenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      is_autenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  is_autenticated: state.auth.valid_token
});

// export default connect(mapStateToProps,null)(PrivateRoute);
export default withRouter(connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(PrivateRoute));