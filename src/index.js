import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Portfolio/Navbar';
import Calculator from './Calculator/Calculator';


const routing = (
    <div>
        <Navbar />
        <Router>
            <div className="main-content">
                <Route exact path="/" component={App} />
                <Route path="/calculator" component={Calculator} />
            </div>
        </Router>
    </div>

)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
