import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/lp loogo.jpg'
import { NavLink } from 'react-router-dom';
import ValidetionHelper from '../utility/Validetion';

const AppNavBar = () => {

    const Logout=()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
        <Container fluid>
          <img className='logo' src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                <NavLink className="nav-link" to="/">Home</NavLink>
              {
                ValidetionHelper.isLogin()?(
                    <NavLink className="nav-link" to="/cart">CartList</NavLink>
                ):(
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                )
              }
            </Nav>
            {
              ValidetionHelper.isLogin()?(
                <button onClick={Logout} className='btn btn-danger'>LogOut</button>
              ):(<NavLink className='btn btn-success' to='/login'>Login</NavLink>)
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
          </div>
        </div>
      </div>
    );
};

export default AppNavBar;