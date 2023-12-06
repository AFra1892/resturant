import {useState} from 'react'
import imagee from '../../images/ig3.jpg'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import axios from 'axios';
const SignUp = () => {
    const [allUsers,setAllUsers] = useState([])
    const [username,setUserName] = useState('')
    const [userpass,setUserPass] = useState('')
    const [terms,setTerms] = useState(false)
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleLoadUser = () => {
            navigate(`/`); 
      };
  return (
    <div className='flex h-screen bg-green-300'>
        <div className='flex'>
            <img src={imagee} alt='pic'/>
        </div>
        <div className=' w-2/6 ml-20 mt-20'>
            <h1 className='text-6xl'> Welcome Back !</h1>
            <h3 className='text-green-700 py-4 '>Give us some information to get better exprience</h3>
            <div className=' flex flex-col gap-y-6'>

            
            <input
                type='email'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full'
                placeholder='Name'
                />
            <input
                type='password'
                value={userpass}
                onChange={(e) => setUserPass(e.target.value)}
                className='border-2 border-green-600 px-4 py-2 w-full '
                placeholder='Password'
                />
            
            </div>
            <button className='mt-3 bg-green-600 w-full h-10' onClick={handleLoadUser}>Log in</button>
            


        </div>
    </div>
  )
}

export default SignUp