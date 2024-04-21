import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./Pages/ProductListPage.jsx";
import CartListPage from "./Pages/CartListPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductListPage/>}/>
                <Route path="/cart-list" element={<CartListPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;