import React from "react";
import axios from "axios";
import consts from "../../config/consts";

import { Primario as H1 } from "../../common/layout/title";
import CardUsuario from "../Users/CardUsuario";

const Tratamento = props => {
    // console.log(props.match);
    axios
        .get(`${consts.API_URL}/users/${props.match.params.userId}/tratamentos`)
        .then(resp => {
            console.log(resp);
        });
    return (
        <React.Fragment>
            <H1 text="Tratamentos Usuário" />
            <CardUsuario {...props} />
        </React.Fragment>
    );
};

export default Tratamento;
