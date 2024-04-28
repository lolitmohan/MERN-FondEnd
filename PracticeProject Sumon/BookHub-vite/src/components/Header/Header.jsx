import Action from "./Action";
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
          <nav className="navbar navbar-expand-lg bg-success bg-opacity-75">
            <div className="container">
              <Logo/>
              <Action/>
            </div>
          </nav>
        </header>

    );
};

export default Header;