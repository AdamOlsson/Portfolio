import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </Router>
,
document.getElementById('root'));

