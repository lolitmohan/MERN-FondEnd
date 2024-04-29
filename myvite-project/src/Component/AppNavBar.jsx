import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/Untitled.png';
import ValidetionHelper from '../Utiliti/Helper';

const AppNavBar = () => {

  const LogOut=()=>{
    sessionStorage.clear();
    window.location.href="/"
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className='logo' src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link' to='/'>ProductList</NavLink>
            {
              ValidetionHelper.isLogin()?(
                <NavLink className='nav-link' to='/cart-list'>CartList</NavLink>

              ):(
            <NavLink className='nav-link' to='/login'>Login</NavLink>

              )
            }
          </Nav>
            {
              ValidetionHelper.isLogin()?(
                <button onClick={LogOut} className='btn btn-danger'>LogOut</button>
              ):(
                <NavLink className='btn btn-success' to='/login'>Login</NavLink> 
              )
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