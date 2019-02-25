import React, { Component } from 'react';
import { Primario as H1 } from '../../common/layout/title'
import config from '../../config/consts'
import axios from 'axios';

export default class FormUsuario extends Component {

    constructor(props) {
        super(props);
        const userId = props.match.params.userId || null;

        this.state = {
            id: userId,
            nome: "",
            email: "",
            phone: "",
            genero: "",
            nasc: ""
        }

        if (userId) {
            this.getUser(userId);

            console.log(this.state);
        }
    }

    getUser(userId) {
        axios.get(`${config.API_URL}/users/${this.state.id}`)
            .then(resp => (
                this.setState({
                    ...this.state,
                    nome: resp.data.nome,
                    email: resp.data.email,
                    phone: resp.data.phone,
                    genero: resp.data.genero,
                    nasc: resp.data.nasc
                })
            ));
    }

    //${match.params.userId || ''}
    render() {
        return (
            <React.Fragment>
                <H1 text={`Usuário `} />

                <div className="row">
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" name="nome" className="form-control" value={this.state.nome} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control" value={this.state.email} />
                    </div>

                    <div className="form-group">
                        <label>Telefone:</label>
                        <input type="email" name="email" className="form-control" value={this.state.phone} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
