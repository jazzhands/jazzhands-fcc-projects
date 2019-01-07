import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Portfolio/Navbar';
import Calculator from './Calculator/Calculator';
import EmbeddedProject from './Projects/EmbeddedProject';
import NotFound from './NotFound';


const routing = (
    <div>
        <Navbar />
        <Router className="main-content">
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/calculator" component={Calculator} />
                    <Route path="/embedded/:project" component={EmbeddedProject} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </div>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
