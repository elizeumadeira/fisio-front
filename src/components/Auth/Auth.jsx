import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "./AuthActions";

import Login from "../../common/template/Login/Login";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user.user || {
        email: "",
        password: "",
        lembrar_senha: true
      },
      valid_token: this.props.user.valid_token || false,
      token: this.props.user.token || ""
    };
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
    return (
      <Login
        user={this.state.user}
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
