import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../Auth/AuthActions";
import FormUsuario from "../Users/FormUsuario";

// class Configuracoes extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }

//     render(){
//         return (
//             // <React.Fragment />
//             <FormUsuario userId={this.props.user.user.id} readOnly={false} />
//         )
//     }
// }

const Configuracoes = (props) => {
    return (
        <FormUsuario userId={props.user.id} readOnly={false} />
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configuracoes);
