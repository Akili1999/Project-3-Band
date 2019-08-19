import React, { Component, Fragment } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import RegisterModal from './RegisterModal';

import LoginModal from './LoginModal';

import Logout from './Logout';

class NavBar extends Component {
    state = {
        isOpen: false
    };

    static PropTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                    <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );
        return (
            <div>
                <Navbar color='blue' role='navigation'>
                    <Container>
                        <NavbarBrand href='/'>Band-Bump</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect (
    mapStateToProps,
    null
)(NavBar);