import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../../components/Auth/AuthActions";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_autenticated: props.user.valid_token
    };
  }

  render() {
    const Lilink = props => {
      const If_Icon = icon => {
        if (icon != "") {
          return <i className={`fas ${icon.icon}`} />;
        }
      };
      const { icon, text, to, active, hide } = props;
        const rest = { ...props };
        delete rest.icon;
        delete rest.text;
        delete rest.to;
        delete rest.active;
        delete rest.hide;
      if (!hide) {
        return (
          <li className={`nav-item ${props.active ? "active" : ""}`}>
            <Link to={to || "/#"} className="nav-link" {...rest}>
              <If_Icon icon={icon} />
              <span>{text}</span>
            </Link>
          </li>
        );
      } else {
        return <React.Fragment />;
      }
    };

    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laptop-medical" />
          </div>
          <div className="sidebar-brand-text mx-3">Fisio</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <Lilink
          to="/login"
          icon="fa-key"
          text="Login"
          active={true}
          hide={this.props.user.valid_token}
        />
        <Lilink
          to="/dashboard"
          icon="fa-tachometer-alt"
          text="Dashboard"
          active={true}
        />

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Sistema</div>
        <Lilink
          to="/configuracoes"
          icon="fa-gears-alt"
          text="Configurações"
          active={false}
        />
        <Lilink
          icon="fa-sign-out-alt"
          text="Logout"
          onClick={this.props.logout}
        />
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth
});
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
