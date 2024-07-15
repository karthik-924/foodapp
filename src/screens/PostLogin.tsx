import onboarding from '../assets/onboarding1.svg'
import Tick from '../assets/Tick.svg'
import Polygon4 from '../assets/Polygon 4.svg'
import "./PostLogin.css"
import vector1 from '../assets/vector1.svg'
import vector2 from '../assets/vector2.svg'
import vector3 from '../assets/vector3.svg'
import vector4 from '../assets/vector4.svg'
import vector5 from '../assets/vector5.svg'
import vector6 from '../assets/vector6.svg'
import vector7 from '../assets/vector7.svg'
import vector8 from '../assets/vector8.svg'
import vector9 from '../assets/vector9.svg'
import vector10 from '../assets/vector10.svg'
import vector11 from '../assets/vector11.svg'

const PostLogin = () => {
  return (
    <div className='font-inter postlogin' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bottom-0 bg-white w-[500px] flex flex-col justify-center items-center max-sm:w-full drawer'>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[60px] h-[4px] indicator mt-[10px] rounded-[11px]'></div>
        </div>
        <div className='flex justify-center h-[170px] w-[204px] mt-16 items-center relative'>
          <div className='h-[124px] w-[124px] iconbackground rounded-full flex z-10 justify-center items-center relative'>
            <img src={Tick} alt='tick' className='absolute z-30' />
            <img src={Polygon4} alt='polygon' className='absolute z-20 spinanimation' />
          </div>
          <img src={vector1} alt='vector' className='absolute z-0 vector1' />
          <img src={vector2} alt='vector' className='absolute z-0 vector2' />
          <img src={vector3} alt='vector' className='absolute z-0 vector3' />
          <img src={vector4} alt='vector' className='absolute z-0 vector4' />
          <img src={vector5} alt='vector' className='absolute z-0 vector5' />
          <img src={vector6} alt='vector' className='absolute z-0 vector6' />
          <img src={vector7} alt='vector' className='absolute z-0 vector7' />
          <img src={vector8} alt='vector' className='absolute z-0 vector8' />
          <img src={vector9} alt='vector' className='absolute z-0 vector9' />
          <img src={vector10} alt='vector' className='absolute z-0 vector10' />
          <img src={vector11} alt='vector' className='absolute z-0 vector11' />
        </div>
        <div className='flex w-full justify-center items-center'>
          <p className='text-2xl font-semibold text-center'>Login Successful</p>
        </div>
        <button className='bg-[#FE8C00] mt-8 rounded-[100px] active:scale-[0.98] text-white h-[52px] text-sm w-full font-semibold'>Go to Tracking Screen</button>
        <p className='text-[#878787] text-sm mt-6 text-center cursor-pointer hover:underline'>Logout</p>
      </div>
    </div>
  )
}

export default PostLogin