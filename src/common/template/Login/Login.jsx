import React from 'react';
//https://startbootstrap.com/snippets/login/

export default props => (
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-3 mx-auto">
            <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                        <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            <label htmlFor="inputEmail">Login</label>
                        </div>
                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <label htmlFor="inputPassword">Senha</label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Lembrar Senha</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Entrar</button>
                    </form>
                    < hr />
                    <div class="text-center">
                        <a class="small" href="/esquecei-minha-senha">Esqueceu minha senha</a>
                    </div>
                    <div class="text-center">
                        <a class="small" href="/cadastrar">Cadastrar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)