import onboarding from '../assets/onboarding1.svg'
import Password from '../assets/Password.svg'
import Google from '../assets/Google.svg'
import { useNavigate } from 'react-router-dom'
import { loginwithEmail, loginwithGoogle } from '../authstorage/authentication'
import { useState } from 'react'


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
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
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate('/postlogin');
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

  const handleLogin = async () => {
    const { email, password } = form
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if (!emailregex.test(email)) {
      alert('Invalid Email')
      return
    }
    if (!passwordregex.test(password)) {
      alert('Password must contain at least 6 characters, including UPPER/lowercase and numbers')
      return
    }
    if (email && password) {
      const val = await loginwithEmail(email, password)
      console.log(val)
      if (val) {
        localStorage.setItem('uid', val)
        navigate('/postlogin')
      } else {
        alert('Invalid Credentials')
      }
    }
  }

  const handleGoogleLogin = async () => {
    const val = await loginwithGoogle()
    if (val) {
      localStorage.setItem('uid', val)
      navigate('/postlogin')
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <div className='font-inter max-sm:hidden' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-8 py-10 flex flex-col'>
        <div className='flex flex-col gap-1'>
          <p className='text-[32px] leading-10 font-semibold'>Login to your account.</p>
          <p className='text-sm text-[#878787]'>Please sign in to your account</p>
        </div>
        <div className='flex flex-col gap-4 mt-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm text-[#101010] font-medium'>Email Address</label>
            <input onChange={handleChange} type='email' id='email' className='border border-[#EDEDED] h-[52px] p-2 rounded-lg text-sm shadow' placeholder='Enter Email' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-sm text-[#101010] font-medium'>Password</label>
            <div className='relative text-center'>
              <input onChange={handleChange} type='password' id='password' className='border border-[#EDEDED] w-full h-[52px] p-2 rounded-lg text-sm shadow' placeholder='Enter Password' />
              <img onClick={() => changeVisibility()} src={Password} alt='password' className='absolute right-2 top-4 cursor-pointer' />
            </div>
          </div>
          <div className='w-full flex mt-1 relative'>
            <p className='text-[#FE8C00] font-medium text-sm text-end absolute right-0'>Forgot Password?</p>
          </div>
          <button onClick={() => handleLogin()} className='bg-[#FE8C00] mt-8 rounded-[100px] active:scale-[0.98] text-white h-[52px] text-sm font-semibold'>Sign In</button>
        </div>
        <div className='flex justify-center items-center gap-4 mt-6'>
          <hr className='w-full border-0 border-[#878787] border-t-[0.5px]' />
          <p className='text-[#878787] text-sm font-medium bg-white px-2 text-nowrap'>Or sign in with</p>
          <hr className='w-full border-0 border-[#878787] border-t-[0.5px]' />
        </div>
        <div onClick={()=>handleGoogleLogin()} className='flex justify-center cursor-pointer items-center gap-4 mt-6'>
          <img src={Google} alt='google' />
        </div>
        <div className='flex justify-center items-center gap-[2px] mt-8'>
          <p className='text-black text-sm font-medium'>Don't have an account?</p>
          <p onClick={() => navigate("/register")} className='text-[#FE8C00] text-sm font-semibold cursor-pointer'>Register</p>
        </div>
      </div>
    </div>
  )
}

export default Login