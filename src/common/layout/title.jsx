import React from 'react';

const Title = ({ component: Component, ...rest }) => (
    <Component className="h3 mb-0 text-gray-800">{rest.children}</Component>
)

const Primario = (props) => (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <Title component="h1">{props.text}</Title>
        {props.button}
    </div>
)

export { Primario };