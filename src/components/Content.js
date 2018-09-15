import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import About from './main-contents/About'
import Contact from './main-contents/Contact'
import Projects from './main-contents/Projects'
import Home from './main-contents/Home'

import './css/Content.css'


function Content({ location }) {
    return (
            <TransitionGroup className="transition-group">
                <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
                    <section className="route-section">
                        <div className="main-content">
                        <Switch location={location}>
                            <Route exact path='/home' component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/projects' component={Projects}/>
                        </Switch>
                        </div>
                    </section>
                </CSSTransition>
            </TransitionGroup>
    );
}

export default withRouter(Content);