import {useState} from 'react'
import jwt from 'jsonwebtoken'
const Login = () => {
  const [useremail,setUserEmail] = useState('')
  const [userpass,setUserPass] = useState('')
  
  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:5555/api/login',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({useremail,userpass}), //inaro mifrestim backend

    })
    const data = await response.json() // json nakoni password ro nemifahme
    console.log(`this what i fetched ${data.token}`);
    
    if(data.token){
      localStorage.setItem('token',`Bearer ${data.token}`)
      alert('login successful')
      window.location.href = '/dashboard'
    }else{
      alert('please check your username and password')
    }
  }

  return (
    <div className='flex h-screen '>
        
        <div className=' w-3/6 px-20 pt-20 '>
            <h1 className='text-6xl'> Welcome Back !!</h1>
            <h3 className='text-blue-600 py-4 '>Give us some information to get better exprience</h3>
            <div className=' flex flex-col gap-y-6'>
          <form className='flex flex-col gap-y-6' onSubmit={loginUser}>
            
            <input
                type='email'
                value={useremail}
                onChange={(e) => setUserEmail(e.target.value)}
                className='border-2 border-blue-300 px-4 py-2 w-full'
                placeholder='Email'
                />
            <input
                type='password'
                value={userpass}
                onChange={(e) => setUserPass(e.target.value)}
                className='border-2 border-blue-300 px-4 py-2 w-full '
                placeholder='Password'
                />
        
            
            <button className='mt-3 bg-blue-300 w-full h-10' type='submit'>Create Account</button>
            


        </form>
        </div>
    </div>
    <div className='w-3/6 bg-blue-300'></div>
    </div>
  )
}

export default Login