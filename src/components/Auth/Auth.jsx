import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './AuthActions';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: 'elizeu.madeira@gmail.com',
                password: 'whatever',
                lembrar_senha: true
            }
        }
    }

    handleInput(e) {
        const i = { ...this.state };
        i.user[e.target.name] = e.target.value;
        this.setState( i );
    }

    handleLembrarSenha(e){
        this.setState( {...this.state,  user: { lembrar_senha: e.target.checked}});
    }

    // handleUser(e) {
    //     console.log(e.target.value);
    //     this.setState(...this.state, { email: e.target.value });
    // }
    // handlePassword(e) {
    //     this.setState(...this.state, { password: e.target.value });
    // }

    render() {
        const user  = this.state.user;

        return (
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-3 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Entrar</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" name="email" value={user.email} className="form-control" onChange={(e) => this.handleInput(e)} placeholder="Email address" required autoFocus />
                                    <label htmlFor="inputEmail">Login</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" name="password" value={user.password} onChange={(e) => this.handleInput(e)} className="form-control" placeholder="Password" required />
                                    <label htmlFor="inputPassword">Senha</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={(e) => this.handleLembrarSenha(e)}  checked={user.lembrar_senha} />
                                    <label className="custom-control-label" htmlFor="customCheck1">Lembrar Senha</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.props.login(user)} type="button">Entrar</button>
                            </form>
                            < hr />
                            <div className="text-center">
                                <a className="small" href="/esquecei-minha-senha">Esqueceu minha senha</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="/cadastrar">Cadastrar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: 'Estou sendo passado pelo mapStateToProps'
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);