import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import './Header.css';

const Header = props => {
  function alerts_list(alert, index) {
    return (
      <a className="dropdown-item d-flex align-items-center" href="#" key={index + 1}>
        <div className="mr-3">
          <div className={`icon-circle bg-${alert.color}`}>
            <i className={`fas ${alert.icon} text-white`} />
          </div>
        </div>
        <div>
          <div className="small text-gray-500">{alert.date}</div>
          <span className="font-weight-bold">{alert.message}</span>
        </div>
      </a>
    )
  }

  function messages_list(message, index) {
    return (
      <a className="dropdown-item d-flex align-items-center" href="#" key={index + 1}>
        <div className="dropdown-list-image mr-3">
          <img
            className="rounded-circle"
            src={message.user_photo}
            alt=""
          />
        </div>
        <div className={message.readed && "font-weight-bold"}>
          <div className="text-truncate">{message.text}</div>
          <div className="small text-gray-500">{message.user_name} · {message.date}</div>
        </div>
      </a>
    )
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {
          !props.user.valid_token ?
            <li className="nav-item">
              <Link
                className="nav-link navbar-dark"
                to="/login"
                role="button"
              >
                <i className="fas fa-sign-out-alt fa-fw " />
                Login
            </Link>
            </li>

            :
            <React.Fragment>
              <li className="nav-item dropdown no-arrow mx-1">

                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell fa-fw" />
                  <span className="badge badge-danger badge-counter">{props.alerts.num_messages}</span>
                </a>
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  {props.alerts.list.map((alert, index) => alerts_list(alert, index))}

                  <a className="dropdown-item text-center small text-gray-500" href="#">
                    Show All Alerts
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-envelope fa-fw" />
                  <span className="badge badge-danger badge-counter">7</span>
                </a>
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 className="dropdown-header">Message Center</h6>
                  {props.messages.list.map((alert, index) => messages_list(alert, index))}
                  <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
              </li>
              <div className="topbar-divider d-none d-sm-block" />


              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-lg-inline text-gray-600 small">
                    {props.user.user.nome}
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Perfil
          </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Configurações
          </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
          </a>
                </div>
              </li>
            </React.Fragment>
        }
      </ul>
    </nav>
  )
};
const alerts = {
  num_messages: 3,
  list: [
    { color: 'primary', icon: 'fa-file-alt', date: 'December 12, 2019', message: 'A new monthly report is ready to download!', read: false },
    { color: 'success', icon: 'fa-donate', date: 'December 7, 2019', message: '$290.29 has been deposited into your account!', read: true },
    { color: 'warning', icon: 'fa-exclamation-triangle', date: 'December 2, 2019', message: 'Spending Alert: We\'ve noticed unusually high spending for your account.', read: false },
  ]
};

const messages = {
  num_messages: 7,
  list: [
    { readed: true, user_photo: "https://source.unsplash.com/fn_BT9fwg_E/60x60", text: 'Hi there! I am wondering if you can help me with a ...', user_name: 'Emily Fowler', date: '50m' },
    { readed: false, user_photo: "https://source.unsplash.com/AU4VPcFN4LE/60x60", text: 'Hi there! I am wondering if you can help me with a ...', user_name: 'Jae Chun', date: '1d' },
    { readed: false, user_photo: "https://source.unsplash.com/CS2uCrpNzJY/60x60", text: 'Hi there! I am wondering if you can help me with a ...', user_name: 'Morgan Alvarez', date: '3d' },
    { readed: false, user_photo: "https://source.unsplash.com/Mv9hjnEUHR4/60x60", text: 'Hi there! I am wondering if you can help me with a ...', user_name: 'Chicken the Dog', date: '2w' }
  ]
}

const mapStateToProps = state => ({
  user: state.auth,
  alerts: alerts,
  messages: messages
});
export default connect(
  mapStateToProps,
  null
)(Header);
