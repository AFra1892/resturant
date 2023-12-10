import React, {useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import Navbar from '../components/navbar/Navbar'
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const DashTest = () => {
    const [logedInUser,setLogedInUser] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const t = token.split(' ')[1]
        const decoded = jwt.verify(t,'myfirstprojectworkingwithjwt10801')
        setLogedInUser(decoded)
        // console.log(decoded);

    },[])
    const styles = {
        backgroundImage: `url(${logedInUser.img})`,
        backgroundSize: 'cover'
    }
    function clickHandeler(){
		alert('token was deleted')
		localStorage.removeItem('token')
		
		navigate('/')
	}
  return (
    <>
    <div className='h-screen bg-red-400' style={styles}>
        <Navbar/>
        <IoMdExit onClick={clickHandeler} />
        {logedInUser.name}
    
    </div>
    
    </>
  )
}

export default DashTest