import React from "react";
import {  Redirect } from "react-router-dom";

export default props => {
  if (props.user.valid_token) {
    return <Redirect to="/dashboard" />
  } else
    return ( console.log(props.user) ||
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-3 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Entrar</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    className="form-control"
                    value={props.user.email || ''}
                    onChange={e => props.handleInput(e)}
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputEmail">Login</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    name="password"
                    value={props.user.password}
                    onChange={e => props.handleInput(e)}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Senha</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    onChange={e => props.handleLembrarSenha(e)}
                    checked={props.user.lembrar_senha && 'checked'}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Lembrar Senha
                </label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  onClick={() => props.login(props.user)}
                  type="button"
                >
                  Entrar
              </button>
              </form>
              <hr />
              <div className="text-center">
                <a className="small" href="/esquecei-minha-senha">
                  Esqueceu minha senha
              </a>
              </div>
              <div className="text-center">
                <a className="small" href="/cadastrar">
                  Cadastrar
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};