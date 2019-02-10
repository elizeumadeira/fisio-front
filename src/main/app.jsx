import React from 'react';
import '../common/template/dependencies.js';

import SideBar from '../common/template/sidebar/SideBar';
import Header from '../common/template/Header/Header';
import Footer from '../common/template/Footer/Footer';
import Auth from '../components/Auth/Auth';

export default props => (
    <React.Fragment>
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header />
                <div id="container-fluid">
                    
                    <Auth />
                </div>
                <Footer />
            </div>
        </div>
    </React.Fragment>
)