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
            navigate('/');
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

            <input
                type='text'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full'
                placeholder='Name'
                />
            <input
                type='email'
                value={useremail}
                onChange={(e) => setUserEmail(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full'
                placeholder='Email'
                />
            <input
                type='password'
                value={userpass}
                onChange={(e) => setUserPass(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full '
                placeholder='Password'
                />
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