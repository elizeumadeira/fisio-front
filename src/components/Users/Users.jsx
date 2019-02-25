import React, { Component } from "react";
import axios from 'axios';
import consts from '../../config/consts'

import { Primario as H1 } from '../../common/layout/title'
import { link as Button } from '../../common/layout/button'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        }


        this.populateUsersList();
    }

    renderTableLines() {
        return this.state.usuarios.map((usuario) => (
            <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>
                    <Button to={`/users/update/${usuario.id}`} text="Atualizar" />
                </td>
            </tr>
        ))
    }

    populateUsersList() {
        axios.get(`${consts.API_URL}/users`)
            .then(resp => {
                this.setState({
                    usuarios: resp.data
                });
            }).catch(e => {
                console.log('erro', e);
            });
    }

    render() {
        return (
            <React.Fragment>
                <H1 text="Usuários" />
                <div className="row">
                    <Button text="cadastrar" to="users/create" />
                </div>
                <div className="row">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableLines()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}