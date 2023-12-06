import {useState} from 'react'
import imagee from '../../images/ig3.jpg'
const SignUp = () => {

    const [username,setUserName] = useState('')
    const [useremail,setUserEmail] = useState('')
    const [userpass,setUserPass] = useState('')
    const [terms,setTerms] = useState(false)

  return (
    <div className='flex h-screen bg-green-300'>
        <div className='flex'>
            <img src={imagee} alt='pic'/>
        </div>
        <div className=' w-2/6 ml-20 mt-20'>
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
            <button className='mt-3 bg-green-600 w-full h-10'>Create Account</button>
            <p>Already have an acoount? <a href='/signin' className='text-green-600'>Log in</a></p>


        </div>
    </div>
  )
}

export default SignUp