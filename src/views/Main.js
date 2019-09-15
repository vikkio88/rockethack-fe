import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
    MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Body } from '../components/Layout';

import { store } from '../store';


import Trips from './Trips';
import Trip from './Trip';
import Settings from './Settings';

class Main extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MDBNavbar color="indigo" dark expand="md">
                        <MDBNavbarBrand>
                            <MDBIcon icon="train" /> IveTrains
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/">Trips</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/settings">Settings</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Body>
                        <Route exact path='/' component={Trips} />
                        <Route path='/trips/:slug' component={Trip} />
                        <Route path='/settings' component={Settings} />
                    </Body>
                </Router>
            </Provider>
        );
    }
}


export default Main;