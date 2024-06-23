import logo from './logo.svg';
import './App.css';
import Topbar from './COMPONETS/Topbar';
import Navbar from './COMPONETS/Navbar';
import Features from './COMPONETS/Features';
import Categories from './COMPONETS/Categories';
import Offer from './COMPONETS/Offer';
import ProductsOne from './COMPONETS/ProductsOne';
import Subscribe from './COMPONETS/Subscribe';
import ProductsTwo from './COMPONETS/ProductsTwo';
import Vendor from './COMPONETS/Vendor';
import Footer from './COMPONETS/Footer';
import Back from './COMPONETS/Back';
import Cart from './COMPONETS/Cart';
import Register from './COMPONETS/Register';
import AddProduct from './COMPONETS/AddProduct';
import Section from './COMPONETS/Section';
import Home from './COMPONETS/Home';
import Login from './COMPONETS/Login';
import Shopdetails from './COMPONETS/Shopdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shops from './COMPONETS/Shops';
import Checkout from './COMPONETS/Checkout';
import FilterProduct from './COMPONETS/FilterProduct';



function App() {
  return (
    <>
      <Router>
      <Topbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shops />}></Route>
          <Route path='/seller' element={<AddProduct />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Shopdetails' element={<Shopdetails />}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          <Route path='/FilterProduct/:category' element={<FilterProduct/>}></Route>
        </Routes>
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;


//  hooks usestate useEffect usenavigate usecontext useref ...spred operaptor function EVENT OBJ ARRAY 

