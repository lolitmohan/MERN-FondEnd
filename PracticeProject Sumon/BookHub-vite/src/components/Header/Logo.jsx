import logo from '../../assets/image/logo.png';
const Logo = () => {
    return (
        <a className="navbar-brand" href="#">
            <img height={40} src={logo} alt="Logo" />
        </a> 
    );
};

export default Logo;