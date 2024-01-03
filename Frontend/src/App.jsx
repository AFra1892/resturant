import { useState,useEffect} from 'react';
import jwt from 'jsonwebtoken'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage';
import ManageMenu from './pages/admin/ManageMenu';
import CreateFood from './pages/admin/CreateFood';
import DeleteFood from './pages/admin/DeleteFood'
import Menu from './pages/menu/Menu'
import SpecialPage from './pages/menu/SpecialPage'
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import PersonalLanding from './pages/PersonalLanding'
import {Cart} from './pages/cart/cart'
import DeleteOrder from './pages/cart/DeleteCartItem';
import Error from './pages/Error';
import ContactPage from './pages/ContactPage';
import LogOutAlert from './pages/LogOutAlert';
import Dashboard from './pages/Dashboard';

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
    <Router>
      <Routes>
        <Route path='/' element={logedInUser.name === 'admin'?<ManageMenu/>:<Landing/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
        <Route path="/test/dashboard" element={<Dashboard/>} />




      </Routes>
      </Router>
    </div>
  );
}

export default App;
