import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Customer from './Customer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Customer />, document.getElementById('customer'));

registerServiceWorker();
