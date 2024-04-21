
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import VerifyPage from './pages/VerifyPage';
import CartListPage from './pages/CartListPage';
import ValidetionHelper from './utility/Validetion';
import NotFoun from './pages/NotFoun';

const App = () => {

  if(ValidetionHelper.isLogin()){
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<ProductListPage/>}/>
          <Route path='/cart' element={<CartListPage/>}/>
          <Route path='*' element={<NotFoun/>}/>
        </Routes>
      </HashRouter>
    );
  }else{

    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<ProductListPage/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Verify' element={<VerifyPage/>}/>
          <Route path='*' element={<NotFoun/>}/>
        </Routes>
      </HashRouter>
    );
  }

};

export default App;