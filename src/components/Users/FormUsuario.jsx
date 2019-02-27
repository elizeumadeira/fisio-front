import React, { Component } from 'react';
import { Primario as H1 } from '../../common/layout/title'
import { button as Button } from '../../common/layout/button'
import config from '../../config/consts'
import axios from 'axios';
import {
    toastr
} from 'react-redux-toastr';

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
        }
    }

    getUser(userId) {
        axios.get(`${config.API_URL}/users/${userId}`)
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

    handleChange(e) {
        const i = { ...this.state };
        i[e.target.name] = e.target.value;
        this.setState(i);
    }

    salvar() {
        if (this.state.id == null) {//criar o usuario
            axios.post(`${config.API_URL}/users`, this.state)
                .then(resp => {
                    toastr.success('Usuário cadastrado com sucesso');
                    this.props.history.push('/users')
                })
        } else {
            var data = { ...this.state }
            var id = this.state.id;
            delete data.id;
            axios.put(`${config.API_URL}/users/${id}`, data)
                .then(resp => {
                    toastr.success('Usuário atualizado com sucesso');
                    this.props.history.push('/users')
                })
        }
    }

    excluir() {
        toastr.confirm('Are you sure about that!', {
            onOk: () => {
                axios.delete(`${config.API_URL}/users/${this.state.id}`)
                .then(resp => {
                    this.props.history.push('/users')
                    toastr.success('Usuário excluído com sucesso');
                    <Redirect to="users" />
                })
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <H1 text={`Usuário `} />
                <form>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" name="nome" readOnly={this.props.readOnly || false} className="form-control" value={this.state.nome} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" readOnly={this.props.readOnly || false} className="form-control" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-8">
                            <div className="form-group">
                                <label>Telefone:</label>
                                <input type="text" name="phone" readOnly={this.props.readOnly || false} className="form-control" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="form-group">
                                <label>Sexo:</label>
                                {this.props.readOnly ? <input type="text" className="form-control" readOnly={true} value={this.state.genero == 'masc' ? 'Masculino' : 'Feminino'} /> :
                                    <select className="form-control" name="genero" value={this.state.genero} onChange={(e) => this.handleChange(e)}>
                                        <option value="masc" >Masculino</option>
                                        <option value="fem" >Feminino</option>
                                    </select>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Nascimento:</label>
                        <input type="date" name="nasc" readOnly={this.props.readOnly || false} className="form-control" value={this.state.nasc} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="col-xs-12">
                        {this.props.readOnly ?
                            <Button onClick={() => this.excluir()} color="danger" text="Excluir" icon="trash" /> :
                            <Button onClick={() => this.salvar()} text="Salvar" icon="save" />}
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
