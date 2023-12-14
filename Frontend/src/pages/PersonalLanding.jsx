import React, {useState, useEffect,useContext } from 'react'
import { ShareContext } from '../context/share-context';
import jwt from 'jsonwebtoken'
import Navbar from '../components/navbar/Navbar'
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const DashTest = ({logedInUser}) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    // montaqel kardam be app js ta betonam to menu ham dastresi dashte basham
    // const [logedInUser,setLogedInUser] = useState({})
    // useEffect(()=>{
    //     const token = localStorage.getItem('token')
    //     const t = token.split(' ')[1]
    //     const decoded = jwt.verify(t,process.env.REACT_APP_JWT)
    //     setLogedInUser(decoded)
    // },[])
    
    

  
    const styles = {
        backgroundImage: `url(${logedInUser.img})`,
        backgroundSize: 'cover'
    }
    function clickHandeler(){
		localStorage.removeItem('token')
		enqueueSnackbar('Loged out successfully', { variant: 'success' });
		navigate('/')
	}
  return (
    <>
    <div className='h-screen bg-red-400' style={styles}>
        <Navbar/>
        <IoMdExit className='cursor-pointer absolute right-0' size={40} color='red' onClick={clickHandeler} />
		<div className="pizzahub__header section__padding">
            <div className="pizzahub__header-content">
                <h1>Hello <span>{logedInUser.name}</span> Welcome to PizzaHub</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="pizzahub__header-content_btns">
                    <button  type='button'>Button</button>
                </div>
            </div>
        </div>    
    </div>
    
    </>
  )
}

export default DashTest