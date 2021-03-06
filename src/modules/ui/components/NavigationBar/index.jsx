import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/lib/Navbar';
import Link from 'react-router-dom/Link';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import withRouter from 'react-router-dom/withRouter';

import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const NavigationBar = ({ isAuthenticated, logout }) =>
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">React App Boilerplate</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/dashboard">
          <NavItem>Dashboard</NavItem>
        </LinkContainer>
        {!isAuthenticated &&
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>}
        {isAuthenticated && <NavItem onClick={logout}>Logout</NavItem>}
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(NavigationBar);
