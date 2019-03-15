import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "../helpers/helpers";

const group_button = props => {
    const id = uuid();
    return (
        <div className="btn-group" role="group">
            <button
                id={id}
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {props.text || ""}
            </button>
            <div className="dropdown-menu" aria-labelledby={id}>
                {props.children}
            </div>
        </div>
    );
};

const button = props => (
    <button
        className={`btn ${props.icon && "btn-icon-split"} btn-${props.color ||
            "primary"} `}
        onClick={() => props.onClick && props.onClick()}
        type={props.type || "button"}
    >
        {props.icon && (
            <span className="icon text-white-50">
                <i className={`fas fa-${props.icon}`} />
            </span>
        )}
        <span className="text">{props.text}</span>
    </button>
);

const link = props => (
    <Link
        to={props.to}
        className={`btn ${props.icon && "btn-icon-split"} btn-${props.color ||
            "primary"} `}
        onClick={() => props.onClick && props.onClick()}
    >
        {props.icon && (
            <span className="icon text-white-50">
                <i className={`fas fa-${props.icon}`} />
            </span>
        )}
        <span className="text">{props.text}</span>
    </Link>
);

export { group_button, button, link };
