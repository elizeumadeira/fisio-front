import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: props.component
        }
    }

    render() {
        return <Route
            render={props =>
                this.props.is_autenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    }
}

const mapStateToProps = state => ({
    is_autenticated: state.auth.valid_token
});
export default connect(mapStateToProps, null)(PrivateRoute);