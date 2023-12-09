import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';

const PersonalLanding = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [name, setName] = useState('')
	// const [tempQuote, setTempQuote] = useState('')

  async function populateQuote() {
    
		const req = await fetch('http://localhost:5555/api/personal', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setName(data.data.username)
			setEmail(data.data.useremail)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
        navigate('/login')
      } else {
				populateQuote()
			}
		}
	}, [])

	// async function updateQuote(event) {
	// 	event.preventDefault()

	// 	const req = await fetch('http://localhost:1337/api/quote', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'x-access-token': localStorage.getItem('token'),
	// 		},
	// 		body: JSON.stringify({
	// 			quote: tempQuote,
	// 		}),
	// 	})

	// 	const data = await req.json()
	// 	if (data.status === 'ok') {
	// 		setQuote(tempQuote)
	// 		setTempQuote('')
	// 	} else {
	// 		alert(data.error)
	// 	}
	// }
  return (
    <>
    <Navbar/>
    <div>Hello {name}  Welcome Back to PizzaHub</div>
    <div>you have loged in with your {email}</div>
    </>
  )
}

export default PersonalLanding