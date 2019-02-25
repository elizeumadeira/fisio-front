import React, { Component } from "react";
import axios from 'axios';
import consts from '../../config/consts'

import { Primario as H1 } from '../../common/layout/title'
import Card from './Card'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarios_cadastrados: 0
    }

    this.updateUsuarios();
  }

  updateUsuarios() {
    axios.get(`${consts.API_URL}/dashboard`)
      .then(resp => {
        this.setState({
          usuarios_cadastrados: resp.data.users
        });
      }).catch(e => {
        // console.log('erro', e);
      });
  }


  render() {
    return (
      <React.Fragment>
        <H1 text="Dashboard" />
        <div className="row">
          <Card title="Usuários cadastrados" info={this.state.usuarios_cadastrados} color="primary" icon="fa-users" />
        </div>
      </React.Fragment>
    );
  }
}