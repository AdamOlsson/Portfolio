import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavbarCarousel/Navbar';
import Content from './components/Content';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <div className="hero-image">
            <div className="page-content">
                <Navbar />
                <Content />
            </div>
        </div>
    </BrowserRouter>
,
document.getElementById('root'));

/* 
<div className='page-content'>
    <Navbar />
    <Content />
</div>
            
*/
                