import { useState} from 'react'
import { useSnackbar } from 'notistack';
import axios from 'axios'

const Login = () => {
  const [useremail,setUserEmail] = useState('')
  const [userpass,setUserPass] = useState('')
  const { enqueueSnackbar } = useSnackbar();
  

  function loginUser(event){
    event.preventDefault()
    axios.post('http://localhost:5555/api/login',{
      useremail:useremail,
      userpass:userpass
    })
    .then((res)=>{
      console.log(res.data.token);
      if(res.data.token){
        localStorage.setItem('token',`Bearer ${res.data.token}`)
        enqueueSnackbar('Loged in successfully', { variant: 'success' });
        window.location.href =  '/dashboard'
      }else{
        enqueueSnackbar('Please Check your Username or Password', { variant: 'error' });
      }
      
    })
    .catch((res)=>{
      enqueueSnackbar(`${res.response.data.msg}`, { variant: 'error' });
    })
  }

  // async function loginUser(event){
  //   event.preventDefault()

  //   const response = await fetch('http://localhost:5555/api/login',{
  //     method:'POST',
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify({useremail,userpass}), //inaro mifrestim backend

  //   })
  //   const data = await response.json() // json nakoni password ro nemifahme
  //   console.log(`this what i fetched ${data.token}`);
    
  //   if(data.token){
  //     localStorage.setItem('token',`Bearer ${data.token}`)
  //     // alert('login successful')
  //     enqueueSnackbar('Loged in successfully', { variant: 'success' });
  //     window.location.href =  '/dashboard'
  //   }else{
  //     enqueueSnackbar('Please Check your Username or Password', { variant: 'error' });
  //   }
  // }

  return (
    <section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-yellow-500 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    {/* <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover"/> */}
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form class="mt-6" action="#" method="POST" onSubmit={loginUser}>
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input
              type="email" 
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
              name="" 
              id="" 
              placeholder="Enter Email Address" 
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              autofocus autocomplete required />
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input 
              type="password"
              value={userpass}
              onChange={(e) => setUserPass(e.target.value)} 
              name="" 
              id="" 
              placeholder="Enter Password" 
              minlength="4" 
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              required/>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr class="my-6 border-gray-300 w-full"/>

      <button type="submit" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <span class="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p class="mt-8">Need an account? <a href="signup" class="text-red-500 hover:text-red-600 font-semibold">Create an account</a></p>


    </div>
  </div>

</section>
  )
}

export default Login





    