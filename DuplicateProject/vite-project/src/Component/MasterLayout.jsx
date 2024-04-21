
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (p) => {
    return (
        <div>
            <AppNavBar/>
            {p.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;