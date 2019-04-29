import React from 'react';

const Title = props => {
    return (
        <h1>
            Hello there, {props.name.firstName} {props.name.lastName}
        </h1>
    );
};

export default Title;