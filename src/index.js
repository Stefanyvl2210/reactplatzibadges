import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew';
import './global.css'

const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);
