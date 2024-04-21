import { Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from '../assets/img/shoping logo.jpeg'
import Validetion from "../Utility/Validetion.jsx";

const AppNavBar = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                <Navbar expand="lg" className="bg-body-tertiary bg-white show">
      <Container fluid>
        <img className="logo" src={logo} alt="logo"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link" to='/' >ProductList</NavLink>
              {
                  Validetion.isLogin()&&
                  <NavLink className="nav-link" to='/cart-list' >CartList</NavLink>
              }

            <NavLink className="nav-link" to='/login'>Login</NavLink>
          </Nav>

            {
                Validetion.isLogin()?(
                    <button className='btn btn-success'>LogOut</button>
                ): (
                    <button className='btn btn-success'>Login</button>
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