import './App.css';
import { Routes, Route } from 'react-router-dom';
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
function App() {

  return (
    <div className="App">
      <OrderContextProvider>

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
        <Route path="/newMenu/:id" element={<SpecialPage />} />
        {/* authorization pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<PersonalLanding/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      </OrderContextProvider>
    </div>
  );
}

export default App;
