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

    console.log(this.props);
  }

  render() {
    const Lilink = props => {
      const If_Icon = icon => {
        if (icon != "") {
          return <i className={`fas ${icon.icon}`} />;
        }
      };
      if (!props.hide) {
        return (
          <li className={`nav-item ${props.active ? "active" : ""}`}>
            <Link
              to={props.to || "/#"}
              className="nav-link"
              onClick={() => props.onclick() || void 0}
            >
              <If_Icon icon={props.icon} />
              <span>{props.text}</span>
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
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
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
        <Lilink icon="fa-sign-out-alt" text="Logout" onclick={this.props.logout} />
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
