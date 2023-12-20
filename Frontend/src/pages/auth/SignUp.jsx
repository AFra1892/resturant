import {useState} from 'react'
import imagee from '../../images/ig3.jpg'
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
    <div className='flex h-screen '>
        <div className='w-3/6 bg-green-300'></div>
        <div className=' w-3/6 px-20 pt-20'>
            <h1 className='text-6xl'> Welcome !</h1>
            <h3 className='text-green-700 py-4 '>Give us some information to get better exprience</h3>
            <div className=' flex flex-col gap-y-6'>
              <div>
                
            <label for="input1" class="text-sm text-gray-700 block mb-1 font-medium">
                Username
              </label>
            <input
                type='text'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                class="w-full bg-green-50 border border-green-400 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700"
                placeholder='Name'
                />
                </div>

                <div>
                  
                <label for="input1" class="text-sm text-gray-700 block mb-1 font-medium">
                Email
               </label>
                <input
                type='email'
                value={useremail}
                onChange={(e) => setUserEmail(e.target.value)}
                class="w-full bg-green-50 border border-green-400 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700"
                placeholder='Email'
                />
                </div>






            <div>
              <label for="input1" class="text-sm text-gray-700 block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                name="input1"
                id="input1"
                value={userpass}
                onChange={(e) => setUserPass(e.target.value)}
                class="w-full bg-green-50 border border-green-400 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700"
                placeholder="Enter your password"
              />
              <div class="flex items-center mt-1 text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="ml-1 text-xs">{userpass.length > 5 ?"Secure Password":""}</p>
              </div>
            </div>

            
            {/* <input
                type='password'
                value={userpass}
                onChange={(e) => setUserPass(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full '
                placeholder='Password'
                /> */}
            <div className='flex gap-x-3'>

                <input
                    type='checkbox'
                    id='terms'
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                />
                <label for='terms'>By creating an account you agree to the Terms of use</label>
            </div>
            </div>
            <button className='mt-3 bg-green-600 w-full h-10' onClick={handleSaveUser}>Create Account</button>
            <p>Already have an acoount? <a href='/signin' className='text-green-600'>Log in</a></p>


        </div>
    </div>
  )
}

export default SignUp