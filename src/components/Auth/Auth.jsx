import React, { Component } from "react";
import { Redirect  } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "./AuthActions";

import Login from "../../common/template/Login/Login";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...this.props.user.user, password: "" } || {
        email: "",
        password: "",
        lembrar_senha: true
      },
      token: this.props.user.token || ""
    };

    if (this.props.user.valid_token)
      <Redirect to="/dashboard" />
  }

  handleInput(e) {
    const i = { ...this.state };
    i.user[e.target.name] = e.target.value;
    this.setState(i);
  }

  handleLembrarSenha(e) {
    const i = { ...this.state };
    i.user.lembrar_senha = e.target.checked;
    this.setState(i);
  }

  render() {
    return (
      <Login
        user={this.state.user}
        valid_token={this.props.user.valid_token}
        login={() => this.props.login(this.state.user)}
        handleInput={e => this.handleInput(e)}
        handleLembrarSenha={e => this.handleLembrarSenha(e)}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
