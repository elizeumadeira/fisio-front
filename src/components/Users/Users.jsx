import React, { Component } from "react";
import axios from "axios";
import consts from "../../config/consts";

import { Primario as H1 } from "../../common/layout/title";
import {
    group_button as GrupoButton,
    button as Button,
    link as Link
} from "../../common/layout/button";

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: [],
            pagination: {},
            filter_pagination: {
                nome: "",
                email: "",
                phone: ""
            }
        };

        this.populateUsersList(1);
    }

    renderTableLines() {
        return this.state.usuarios.map(usuario => (
            <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>
                    <GrupoButton>
                        <Link
                            to={`/users/update/${usuario.id}`}
                            text="Atualizar"
                        />
                        <Link
                            to={`/users/delete/${usuario.id}`}
                            text="Excluir"
                        />
                    </GrupoButton>
                    <Link
                        to={`/users/${usuario.id}/tratamentos`}
                        text="Acompanhar"
                    />
                </td>
            </tr>
        ));
    }

    populateUsersList() {
        const page = this.state.pagination.current_page;
        axios
            .get(`${consts.API_URL}/users/page`, {
                params: { filtro: { ...this.state.filter_pagination }, page }
            })
            .then(resp => {
                const data = resp.data;
                const usuarios = data.data;
                delete data.data;

                this.setState({
                    ...this.state,
                    usuarios,
                    pagination: data
                });
                this.renderButtonsPagination();
            })
            .catch(e => {
                console.log("erro", e);
            });
    }

    renderButtonsPagination() {
        //https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
        function getPaginationButtons(c, m) {
            var current = c,
                last = m,
                delta = 2,
                left = current - delta,
                right = current + delta + 1,
                range = [],
                rangeWithDots = [],
                l;

            for (let i = 1; i <= last; i++) {
                if (i == 1 || i == last || (i >= left && i < right)) {
                    range.push(i);
                }
            }

            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push("...");
                    }
                }
                rangeWithDots.push(i);
                l = i;
            }

            return rangeWithDots;
        }

        const buttons = getPaginationButtons(
            this.state.pagination.current_page,
            this.state.pagination.last_page
        );

        return (
            <div>
                Mostrando página {this.state.pagination.current_page} de{" "}
                {this.state.pagination.last_page}
                <div className="btn-toolbar" role="toolbar">
                    <div className="btn-group">
                        {this.state.pagination.current_page > 1 && (
                            <Button
                                text="<"
                                onClick={() =>
                                    this.handlePage(
                                        this.state.pagination.current_page - 1
                                    )
                                }
                            />
                        )}
                        {buttons.map(pagina => (
                            <Button
                                key={pagina}
                                text={pagina}
                                color={
                                    pagina ===
                                        this.state.pagination.current_page &&
                                    "info"
                                }
                                onClick={() =>
                                    pagina !==
                                        this.state.pagination.current_page &&
                                    pagina !== "..." &&
                                    this.handlePage(pagina)
                                }
                            />
                        ))}
                        {this.state.pagination.current_page !==
                            this.state.pagination.last_page && (
                            <Button
                                text=">"
                                onClick={() =>
                                    this.handlePage(
                                        this.state.pagination.current_page + 1
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }

    handlePage(page) {
        const i = { ...this.state };
        i.pagination.current_page = page;
        this.setState(i);
        this.populateUsersList();
    }

    handleFilterChange(e) {
        const i = { ...this.state };
        i.filter_pagination[e.target.name] = e.target.value;
        this.setState(i);
    }

    handleFilterShortCut(e) {
        if (e.key === "Enter") {
            this.populateUsersList();
        } else if (e.key === "Escape") {
            const i = { ...this.state };
            i.filter_pagination[e.target.name] = "";
            this.setState(i);
        }
    }

    render() {
        return (
            <React.Fragment>
                <H1 text="Usuários" />
                <div className="row">
                    <Link text="cadastrar" to="users/create" />
                </div>
                <div className="row">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th />
                            </tr>
                            <tr>
                                <th />
                                <th>
                                    <input
                                        type="text"
                                        value={
                                            this.state.filter_pagination.nome
                                        }
                                        name="nome"
                                        onKeyUp={e =>
                                            this.handleFilterShortCut(e)
                                        }
                                        onChange={e =>
                                            this.handleFilterChange(e)
                                        }
                                        className="form-control"
                                    />
                                </th>
                                <th>
                                    <input
                                        type="text"
                                        value={
                                            this.state.filter_pagination.email
                                        }
                                        name="email"
                                        onKeyUp={e =>
                                            this.handleFilterShortCut(e)
                                        }
                                        onChange={e =>
                                            this.handleFilterChange(e)
                                        }
                                        className="form-control"
                                    />
                                </th>
                                <th>
                                    <input
                                        type="text"
                                        value={
                                            this.state.filter_pagination.phone
                                        }
                                        name="phone"
                                        onKeyUp={e =>
                                            this.handleFilterShortCut(e)
                                        }
                                        onChange={e =>
                                            this.handleFilterChange(e)
                                        }
                                        className="form-control"
                                    />
                                </th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>{this.renderTableLines()}</tbody>
                    </table>
                    {this.renderButtonsPagination()}
                </div>
            </React.Fragment>
        );
    }
}
