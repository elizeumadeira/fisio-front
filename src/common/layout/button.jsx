import React from 'react';
import { Link } from "react-router-dom";

const button = (props) => (
    <button className={`btn ${props.icon && 'btn-icon-split'} btn-primary `} onClick={() => props.onClick && props.onClick()} type={props.type || 'button'}>
    {
        props.icon &&
            <span className="icon text-white-50">
            <i className={`fas fa-${props.icon}`}></i>
        </span>
    }
        <span className="text">{props.text}</span>
    </button>
)

const link = (props) => (
    <Link to={props.to} className={`btn ${props.icon && 'btn-icon-split'} btn-primary `} onClick={() => props.onClick && props.onClick()}>
    {
        props.icon &&
            <span className="icon text-white-50">
            <i className={`fas fa-${props.icon}`}></i>
        </span>
    }
        <span className="text">{props.text}</span>
    </Link>
)

export { button, link };