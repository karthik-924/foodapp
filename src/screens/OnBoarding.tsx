import { useState } from 'react'
import onboarding1 from '../assets/onboarding1.svg'
import onboarding2 from '../assets/onboarding2.svg'
import onboarding3 from '../assets/onboarding3.svg'
import nexticon from '../assets/NextIcon.svg'
import nexticonload from '../assets/NextIconLoad.svg'
import { useNavigate } from 'react-router-dom'
import './OnBoarding.css'

const OnBoarding = () => {
    const [status, setStatus] = useState(0)
    const [nextpage, setNextPage] = useState(false)
    const navigate = useNavigate();
    const nextstatus = () => {
        if (status < 2) {
            setStatus(status + 1)
        }
        else {
            setNextPage(true)
            setInterval(() => {
                navigate('/login')
            }, 1000)
        }
    }
    return (
        <div className='relative' style={{ backgroundImage: `url(${status === 0 ? onboarding1 : status === 1 ? onboarding2 : onboarding3})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='bg-[#FE8C00] font-inter relative flex flex-col p-8 pt-10 w-[400px] max-sm:w-[350px] max-mb:w-[85%] max-mb:p-5 max-mb:pt-8 max-sm:m-5 pb-8 justify-center items-center rounded-[48px] text-white gap-5 max-sm:absolute max-sm:bottom-0'>
                <h3 className='text-center text-[32px] leading-8 font-semibold'>We serve incomparable delicacies</h3>
                <p className='text-center text-sm'>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</p>
                <div className='flex gap-1'>
                    <div className={`w-6 h-[6px] ${status === 0 ? "bg-white" : "bg-[#C2C2C2]"} rounded-xl`}></div>
                    <div className={`w-6 h-[6px] ${status === 1 ? "bg-white" : "bg-[#C2C2C2]"} rounded-xl`}></div>
                    <div className={`w-6 h-[6px] ${status === 2 ? "bg-white" : "bg-[#C2C2C2]"} rounded-xl`}></div>
                </div>
                <div className={`w-full flex justify-between pl-2 mt-16 pr-2 ${status == 2 ? "hidden" : ""}`}>
                    <p className='text-center text-sm font-semibold'>Skip</p>
                    <button onClick={() => nextstatus()} className='bg-none flex gap-2'>
                        <p className='text-sm font-semibold'>Next</p>
                        <img src={nexticon} alt='next icon' />
                    </button>
                </div>
                <div className={`w-full flex justify-center pl-2 mt-16 relative pr-2 ${status == 2 ? "" : "hidden"}`}>
                    <div className='relative flex justify-center items-center'>
                    <button onClick={nextstatus} className='bg-white z-20 cursor-pointer rounded-full w-[62px] h-[62px] flex justify-center items-center'>
                        <img src={nexticonload} alt='next icon' />
                    </button>
                        <div className={`absolute ${nextpage?"loader":""} z-10 w-[94px] h-[94px] border-[2px] border-t-[rgba(255,255,255,0.2)] -rotate-45 border-t-[2px] rounded-full border-solid border-white`}></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default OnBoarding