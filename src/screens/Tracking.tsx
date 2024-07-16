import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import onboarding from '../assets/onboarding1.svg'
import Clock from '../components/Clock';


const Tracking = () => {
  const [speed, setSpeed] = useState(1);
  // const [angle, setAngle] = useState(0);
  // const [startTime] = useState(new Date());
  const startTime = new Date();
  // const navigate = useNavigate();
  const handleShare = () => {
    console.log(startTime, new Date());
    const getCurrentTimeShownOnClock = (startTime: Date) => {
      const currentTime = new Date();
      const elapsedTime = (currentTime.getTime() - startTime.getTime());
      const adjustedTime = new Date(startTime.getTime() + elapsedTime);
      return adjustedTime;
    };

    const adjustedTime = getCurrentTimeShownOnClock(startTime);


    // const decidedTime = formatTime(adjustedTime);
    // console.log(decidedTime);

    // Convert startTime to numeric value
    // const startTimeNumeric = startTime.getTime();
    const decidedTimeNumeric = adjustedTime.getTime();

    // Create the URL with numeric values
    const url = `${window.location.origin}/share?speed=${speed}&time=${decidedTimeNumeric}&otime=${startTime.getTime()}`;

    // Copy the URL to clipboard
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard');
  };


  return (
    <div className='font-inter max-sm:hidden' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-20 py-12 max-sm:px-0 max-sm:py-0 flex flex-col justify-center'>
        <div className='flex justify-center items-center mb-8'>
          <Clock speed={speed} time={startTime} />
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