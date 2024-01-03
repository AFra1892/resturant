import {useState} from 'react'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {

    const [username,setUserName] = useState('')
    const [useremail,setUserEmail] = useState('')
    const [userpass,setUserPass] = useState('')
    const [terms,setTerms] = useState(false)
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveUser = () => {
        const data = {
          username,
          useremail,
          userpass
        };
        
        axios
          .post('http://localhost:5555/users/newuser', data)
          .then(() => {
            
            enqueueSnackbar('Food Created successfully', { variant: 'success' });
            navigate('/signin');
          })
          .catch((error) => {
            
            // alert('An error happened. Please Chack console');
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
      };

  return (
    <section class="flex flex-col md:flex-row h-screen items-center">

  

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form class="mt-6" action="#" method="POST" >
      <div>
          <label class="block text-gray-700">User Name</label>
          <input
              type="email" 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              name="" 
              id="" 
              placeholder="Enter User Name" 
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              autofocus autocomplete required />
        </div>

      
        <div className='mt-4'>
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

        <button type="submit" class="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6" onClick={handleSaveUser}>Create Account</button>
      </form>

      <hr class="my-6 border-gray-300 w-full"/>

      <button type="submit" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <span class="ml-4">
            Sign in
            with
            Google</span>
            </div>
          </button>

      <p class="mt-8">Already have an acoount? <a href="/signin" class="text-yellow-500 hover:text-yellow-600 font-semibold">Sign in</a></p>


    </div>
  </div>
  <div class="bg-red-600 hidden lg:block w-full md:w-1/2 xl:w-1/3 h-screen">
    {/* <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover"/> */}
  </div>
</section>
  )
}

export default SignUp

