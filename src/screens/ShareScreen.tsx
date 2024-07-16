import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import onboarding from '../assets/onboarding1.svg'
import Clock from '../components/Clock';


const ShareScreen = () => {
    // const [speed, setSpeed] = useState(1);
    const [searchParams] = useSearchParams();
    const [quote, setQuote] = useState('');
    const [speed, setSpeed] = useState(searchParams.get('speed') ? parseInt(searchParams.get('speed')!) : 0)
    // const originalTime = searchParams.get('otime') as string;
    // const time = new Date(searchParams.get('time')!);
    const time = new Date(parseInt(searchParams.get('time') ?? ''));
    useEffect(() => {
        const fetchQuote = () => {
            fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY as string,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data && data.length > 0) {
                        setQuote(data[0].quote);
                    }
                })
                .catch((error) => console.error("Error fetching quote:", error));
        };

        fetchQuote();

        const interval = setInterval(() => {
            fetchQuote();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    // console.log(time);
    return (
        <div className='font-inter max-sm:hidden' style={{ backgroundImage: `url(${onboarding})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='bg-white max-sm:w-screen max-sm:h-screen max-sm:rounded-none rounded-[48px] px-20 py-12 max-sm:px-0 max-sm:py-0 flex flex-col justify-center'>
                <div className=' transition-all duration-5000 bg-gray-100 mb-5 w-[400px] max-sm:w-full' style={{ opacity: 1 }}>
                    <p className='text-xs font-semibold text-center'>{quote}</p>
                </div>
                <div className='flex justify-center items-center mb-8'>
                    <Clock
                        speed={speed}
                        time={time}
                    />
                </div>
                <div className='flex flex-col items-center mb-8'>
                    <input type='range' min='0.5' max='5' step='0.1' value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className='w-[400px] max-sm:w-[80%]' />
                    <p className='mt-2'>Speed: {speed}x</p>
                </div>
                {/* <div className='flex justify-center'>
          <button onClick={handleShare} className='bg-[#FE8C00] text-white py-2 px-4 rounded-full'>Share</button>
        </div> */}
            </div>
        </div>
    );
}

export default ShareScreen