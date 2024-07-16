import { useEffect } from "react"
import "./Clock.css"

type Props = {
    speed: number,
    time: Date
}

const Clock = ({ speed, time }: Props) => {
    const adjustedTime = new Date(time);
    // console.log(adjustedTime);
    adjustedTime.setHours(adjustedTime.getHours() + 2);
    // console.log(adjustedTime);
    const initialHourAngle = (adjustedTime.getHours() % 12) * 30 + (adjustedTime.getMinutes() / 60) * 30;
    const initialMinuteAngle = adjustedTime.getMinutes() * 6 + (adjustedTime.getSeconds() / 60) * 6;
    const initialSecondAngle = adjustedTime.getSeconds() * 6;
    useEffect(() => {
        const hour = document.getElementById('hour') as HTMLElement
        const minute = document.getElementById('minute') as HTMLElement
        const second = document.getElementById('second') as HTMLElement
        if (!hour || !minute || !second) return
        hour.style.animationDuration = `${43200 / speed}s`
        minute.style.animationDuration = `${3600 / speed}s`
        second.style.animationDuration = `${60 / speed}s`
    }, [speed])

    return (
        <div className="face relative w-[315px] h-[315px] max-sm:w-[215px] max-sm:h-[215px] rounded-full outline-8 outline-gray-300 outline shadow-lg">
            <div className="numbers w-full h-full">
                {[...Array(60)].map((_, i) => (
                    <p
                        key={i}
                        className="number"
                        style={{
                            transform: `translate(-50%, -50%) rotateZ(${6 * i}deg) translateY(-131px)`
                        }}
                    ></p>
                ))}
            </div>
            <div className="hours w-full h-full">
                {[...Array(12)].map((_, i) => (
                    <p key={i} className="hoursnumber">{i + 1}</p>
                ))}
            </div>
            <div className="absolute w-[270px] h-[270px] max-sm:w-[170px] max-sm:h-[170px] border border-solid border-[#FE8C00] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[256px] h-[256px] max-sm:w-[156px] max-sm:h-[156px] border border-solid border-[#FE8C00] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* <div className="hand w-full h-full"> */}
            <div className="hand w-full h-full flex justify-center items-center">
                <div id="hour" className="hour absolute w-[7px] max-sm:w-[5px] max-sm:h-[50px] h-[100px] bg-[#FE8C00] top-[58px]" style={{ rotate: `${initialHourAngle}deg`,animationDirection: 'reverse', animationDuration: `${43200}s`, animationName: 'watch', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}></div>
                <div id="minute" className="minute absolute w-[5px] max-sm:w-[4px] h-[130px] max-sm:h-[80px] max-sm:left-[49.1%] bg-[#FE8C00] top-[28px] left-[49.3%]" style={{ rotate: `${initialMinuteAngle}deg`,animationDirection: 'reverse', animationDuration: `${3600}s`, animationName: 'watch', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}></div>
                <div id="second" className="second" style={{rotate: `${initialSecondAngle}deg`}}></div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Clock