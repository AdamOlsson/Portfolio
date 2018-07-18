import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './main-contents/About'
import Contact from './main-contents/Contact'
import Projects from './main-contents/Projects'
import Home from './main-contents/Home'

export default class Content extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/projects' component={Projects}/>
            </Switch>
        );
    }
}
