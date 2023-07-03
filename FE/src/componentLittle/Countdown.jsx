import { useState, useEffect } from "react";
import { getRemainingTimeUntilTimestamp } from "../utils/countdown";
import '../sass/countdown.scss';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
function CountdownTimer({countdownTimestamps}) {
    const [saleTime, setSaleTime] = useState(defaultRemainingTime);
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestamps);
        }, 500);
        return () => clearInterval(intervalId);
    }, [countdownTimestamps])
    const updateRemainingTime = (countdown) => {
        setSaleTime(getRemainingTimeUntilTimestamp(countdown));
    }
    return (
        <>
            <div>
                <span className="cung">{saleTime.days}</span>
                <span className="khac">Days</span>
                <span className="cung">{saleTime.hours}</span>
                <span className="khac">:</span>
                <span className="cung">{saleTime.minutes}</span>
                <span className="khac">:</span>
                <span className="cung">{saleTime.seconds}</span>
            </div>
        </>
    );
}

export default CountdownTimer;