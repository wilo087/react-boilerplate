import 'babel-polyfill'; // Async-Await faeatures

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './scss/main.scss';

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('root'));
