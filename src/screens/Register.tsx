import onboarding from '../assets/onboarding2.svg'
import Password from '../assets/Password.svg'
import Google from '../assets/Google.svg'
import { useNavigate } from 'react-router-dom';
import "./Register.css"
import { useState } from 'react';
import { loginwithGoogle, register } from '../authstorage/authentication';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: ''
  })
  const changeVisibility = () => {
    const password = document.getElementById('password') as HTMLInputElement
    if (password.type === 'password') {
      password.type = 'text'
    } else {
      password.type = 'password'
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }
  const handleRegister = async () => {
    const { email, name, password } = form
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const checkbox = document.getElementById('termsandconditions') as HTMLInputElement
    if (!checkbox.checked) {
      alert('Please agree to the terms and conditions')
      return
    }
    if (!emailregex.test(email)) {
      alert('Invalid Email')
      return
    }
    if (!passwordregex.test(password)) {
      alert('Password must contain at least 6 characters, including UPPER/lowercase and numbers')
      return
    }
    if (email && name && password) {
      const val = await register(name, email, password)
      if ( val ) {
        localStorage.setItem('uid', val)
        navigate('/postlogin')
      } else {
        alert('User already exists')
      }
    }
  }
  const handleSigninwithGoogle = async () => {
    const val = await loginwithGoogle()
    // console.log(val)
    if (val) {
      localStorage.setItem('uid', val)
      navigate('/postlogin')
    } else {
      alert('User already exists')
    }
  }
  return (
    <div className='font-inter max-sm:hidden min-h-screen' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white cursor-default max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-8 py-10 pb-5 max-sm:px-4 max-sm: flex flex-col'>
        <div className='flex flex-col gap-1'>
          <p className='text-[32px] leading-10 font-semibold'>Create your new account</p>
          <p className='text-sm text-[#878787]'>Create an account to start looking for the food you like</p>
        </div>
        <div className='flex flex-col gap-4 mt-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm text-[#101010] font-medium'>Email Address</label>
            <input onChange={handleChange} type='email' id='email' className='border border-[#EDEDED] h-[52px] p-2 rounded-lg text-sm shadow' placeholder='Enter Email' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='name' className='text-sm text-[#101010] font-medium'>User Name</label>
            <input onChange={handleChange} type='text' id='name' className='border border-[#EDEDED] h-[52px] p-2 rounded-lg text-sm shadow' placeholder='Enter User Name' />
            <div className='flex flex-col gap-2'>
              <label htmlFor='password' className='text-sm text-[#101010] font-medium'>Password</label>
              <div className='relative text-center'>
                <input onChange={handleChange} type='password' id='password' className='border border-[#EDEDED] w-full h-[52px] p-2 rounded-lg text-sm shadow' placeholder='Enter Password' />
                <img onClick={() => changeVisibility()} src={Password} alt='password' className='absolute right-2 top-4 cursor-pointer' />
              </div>
            </div>
            <div className='flex mt-2 gap-2'>
              <input id='termsandconditions' type='checkbox' className='custom-checkbox' />
              <p className='text-sm font-medium cursor-default'>I Agree with
                <span className='text-[#FE8C00] font-semibold ml-1 cursor-pointer'>Terms of Service</span> and
                <span className='text-[#FE8C00] font-semibold ml-1 cursor-pointer'>Privacy Policy</span></p>
            </div>
          </div>
          <button onClick={()=>handleRegister()} className='bg-[#FE8C00] mt-3 rounded-[100px] active:scale-[0.98] text-white h-[52px] text-sm font-semibold'>Register</button>
        </div>
        <div className='flex justify-center items-center gap-4 mt-6'>
          <hr className='w-full border-0 border-[#878787] border-t-[0.5px]' />
          <p className='text-[#878787] text-sm font-medium bg-white px-2 text-nowrap'>Or sign in with</p>
          <hr className='w-full border-0 border-[#878787] border-t-[0.5px]' />
        </div>
        <div className='flex justify-center items-center gap-4 mt-6 cursor-pointer'>
          <img src={Google} alt='google' onClick={()=>handleSigninwithGoogle()} />
        </div>
        <div className='flex justify-center items-center gap-[2px] mt-8'>
          <p className='text-black text-sm font-medium'>Have an account?</p>
          <p onClick={() => navigate("/login")} className='text-[#FE8C00] text-sm font-semibold cursor-pointer'>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Register