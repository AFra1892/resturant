import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";
import jwt from 'jsonwebtoken'
import Navbar from '../components/navbar/Navbar';

const PersonalLanding = () => {

  let number = 0
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
	// const [tempQuote, setTempQuote] = useState('')

	
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			console.log(user);
			if (!user) {
				localStorage.removeItem('token')
				navigate('/login')
			} else {
				populateQuote()
			}
		}
	}, [])


	async function populateQuote() {
	  
		  const req = await fetch('http://localhost:5555/api/personal', {
			  headers: {
				  'x-access-token': localStorage.getItem('token'),
			  },
		  })
  
		  const data = await req.json()
		  if (data.status === 'ok') {
			  setName(data.user.username)
			  setEmail(data.user.useremail)
			  setImg(data.user.usercustomimg)
		  } else {
			  alert(data.error)
		  }
	  }
	
	function clickHandeler(){
		alert('token was deleted')
		localStorage.removeItem('token')
		number = number+1
		navigate('/')
	}
  return (
    <>
    <Navbar/>
	<IoMdExit onClick={clickHandeler} />
    <div>Hello {name}  Welcome Back to PizzaHub</div>
    <div>you have loged in with your {email}</div>
	<img src={img} alt='landing'/>
    </>
  )
}

export default PersonalLanding