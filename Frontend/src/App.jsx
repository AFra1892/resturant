import { useState,useEffect} from 'react';
import jwt from 'jsonwebtoken'
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
import { ShareContextProvider } from './context/share-context';
import {Cart} from './pages/cart'
import { Shop } from './pages/shop/shop';
import DeleteOrder from './pages/cart/DeleteCartItem';
import Error from './pages/Error';
import Contact from './pages/Contact';
import LogOutAlert from './pages/LogOutAlert';
import TestFramer from './pages/TestFramer'

function App() {
  const [logedInUser,setLogedInUser] = useState({})
    useEffect(()=>{
      if(localStorage.getItem('token')!== null){
        const token = localStorage.getItem('token')
        const t = token.split(' ')[1]
        const decoded = jwt.verify(t,process.env.REACT_APP_JWT)
        setLogedInUser(decoded)}
    },[])
    
  return (
    <div className="App">
      <ShareContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={logedInUser.name === 'admin'?<ManageMenu/>:<Landing/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/chicken" element={<ItemDetail />} />
        {/* control panel */}
        <Route path="/dashboard/create" element={logedInUser.name === 'admin'?<CreateFood/>:<Error/>} />
        <Route path="/dashboard/delete/:id" element={logedInUser.name ==='admin' ? <DeleteFood/> : <Error/>} />
        {/* menu based on database */}
        <Route path="/menu" element={<Menu logedInUser={logedInUser}/>} />
        <Route path="/menu/:id" element={<SpecialPage />} />
        {/* authorization pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />

        <Route path="/dashboard" element={<PersonalLanding logedInUser={logedInUser}/>} />
        <Route path="/dashboard/logout" element={<LogOutAlert/>} />
        <Route path="/cart" element={<Cart logedInUser={logedInUser}/>} />
        <Route path="/cart/user/:name/delete/:id" element={<DeleteOrder/>} />
        <Route path="/shop" element={<Shop/>} />



        <Route path="/testframer" element={<TestFramer/>} />

      </Routes>
      </Router>
      </ShareContextProvider>
    </div>
  );
}

export default App;
