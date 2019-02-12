import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './AuthActions';

import Login from '../../common/template/Login/Login'

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            valid_token: this.props.valid_token,
            token: this.props.token
        }
    }

    handleInput(e) {
        const i = { ...this.state };
        i.user[e.target.name] = e.target.value;
        this.setState(i);
    }

    handleLembrarSenha(e) {
        this.setState({ ...this.state, user: { lembrar_senha: e.target.checked } });
    }

    render() {
        return (<Login user={this.props.user} login={login} />) 
    }
}

const mapStateToProps = state => ({
    user: state
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);