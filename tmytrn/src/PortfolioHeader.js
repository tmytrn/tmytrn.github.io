import React from 'react';
import './App.css';
import Tachyons from 'tachyons';
import Portfolio from './Portfolio';
import {Link} from 'react-router-dom';

function PortfolioHeader() {
    return (
        <header class=" w-100 ph3 pv3-ns ph4-m ph5-l">
            <nav class=" fw6 ">
                <Link to="/portfolio" class="link color">
                <h1 class="f4 fw6">Tommy Tran—Portfolio</h1>
                </Link>
            </nav>
        </header>
    );
}

export default PortfolioHeader;