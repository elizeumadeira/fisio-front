import React, { Component } from "react";
import axios from 'axios';
import consts from '../../config/consts'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarios_cadastrados: 0
    }
  }

  teste(){
    console.log('clicando no teste');
    axios.get(`${consts.API_URL}/dashboard`)
    .then(resp => {
      console.log('teste', resp);
    }).catch(e => {
      console.log('erro', e);
  });
  }


  render() {
    return (
      <React.Fragment>
        <h1>Dashboard asd</h1>
        <h2>Usuários cadastrados {this.state.usuarios_cadastrados}</h2>
        <button onClick={() => this.teste()}>Click</button>
      </React.Fragment>
    );
  }
}