import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ManageMenu from './pages/ManageMenu';
import CreateFood from './pages/CreateFood';
import DeleteFood from './pages/DeleteFood'
import Menu from './pages/menu/Menu'
import SpecialPage from './pages/menu/SpecialPage'
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import PersonalLanding from './pages/PersonalLanding'
import { OrderContextProvider } from './context/order-context';
import {Cart} from './pages/cart/cart'
import { Shop } from './pages/shop/shop';
function App() {

  return (
    <div className="App">
      <OrderContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu/chicken" element={<ItemDetail />} />
        {/* control panel */}
        <Route path="/test" element={<ManageMenu/>} />
        <Route path="/test/create" element={<CreateFood/>} />
        <Route path="/test/delete/:id" element={<DeleteFood/>} />
        {/* menu based on database */}
        <Route path="/menu" element={<Menu/>} />
        <Route path="/menu/:id" element={<SpecialPage />} />
        {/* authorization pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<PersonalLanding/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shop" element={<Shop/>} />

      </Routes>
      </Router>
      </OrderContextProvider>
    </div>
  );
}

export default App;
