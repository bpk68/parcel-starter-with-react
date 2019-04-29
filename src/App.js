import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/style.scss';
import Title from './components/Title';


class App extends Component {

    render() {
        const person = {
            firstName: 'Parcel',
            lastName: 'Starter'
        };

        return (
            <Title name={person} />
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);