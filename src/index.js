import React from 'react';
const reactDom = require("react-dom");
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';



reactDom.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);