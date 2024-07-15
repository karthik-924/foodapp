import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import onboarding from '../assets/onboarding1.svg'
import Clock from '../components/Clock';


const Tracking = () => {
  const [speed, setSpeed] = useState(1);
  // const [angle, setAngle] = useState(0);
  // const [startTime] = useState(new Date());
  const navigate = useNavigate();
  console.log(speed);
  const handleShare = () => {
    const uniqueId = uuidv4();
    navigate(`/share/${uniqueId}?speed=${speed}`);
  };
  return (
    <div className='font-inter max-sm:hidden' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-20 py-12 max-sm:px-0 max-sm:py-0 flex flex-col justify-center'>
        <div className='flex justify-center items-center mb-8'>
          <Clock speed={speed} time={new Date()}/>
        </div>
        <div className='flex flex-col items-center mb-8'>
          <input type='range' min='0.5' max='5' step='0.1' value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className='w-[400px] max-sm:w-[80%]' />
          <p className='mt-2'>Speed: {speed}x</p>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleShare} className='bg-[#FE8C00] text-white py-2 px-4 rounded-full'>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Tracking