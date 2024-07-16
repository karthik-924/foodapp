import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import onboarding from '../assets/onboarding1.svg'
import Clock from '../components/Clock';
import { logout } from '../authstorage/authentication';
import { useNavigate } from 'react-router-dom';


const Tracking = () => {
  const [speed, setSpeed] = useState(1);
  const [quote, setQuote] = useState('');
  const startTime = new Date();
  const navigate = useNavigate();
  const handleShare = () => {
    console.log(startTime, new Date());
    const getCurrentTimeShownOnClock = (startTime: Date) => {
      const currentTime = new Date();
      const elapsedTime = (currentTime.getTime() - startTime.getTime());
      const adjustedTime = new Date(startTime.getTime() - elapsedTime);
      return adjustedTime;
    };
    const adjustedTime = getCurrentTimeShownOnClock(startTime);
    const decidedTimeNumeric = adjustedTime.getTime();
    const url = `${window.location.origin}/share?speed=${speed}&time=${decidedTimeNumeric}&otime=${startTime.getTime()}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard');
  };

  const Logout = async () => {
    const val = await logout()
    if (val) {
      navigate('/login')
    }
  }

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes")
      .then(res => res.json())
      .then(data => {
        setQuote(data.quote);
      }
      );
    const interval = setInterval(() => {
      fetch("https://api.api-ninjas.com/v1/quotes")
        .then(res => res.json())
        .then(data => {
          setQuote(data.quote);
        }
        );
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='font-inter max-sm:hidden' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-20 py-12 max-sm:px-0 max-sm:py-0 flex flex-col justify-center'>
        <div className=' transition-all opacity-0 duration-5000' style={{ opacity: 1 }}>
          <p className='text-2xl font-semibold text-center'>{quote}</p>
        </div>
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
        <p onClick={() => Logout()} className='text-[#878787] text-sm mt-6 text-center cursor-pointer hover:underline'>Logout</p>
      </div>
    </div>
  );
}

export default Tracking