'use client'
import { useEffect, useState } from 'react';
import useCountDown from './useCountdown';
import moment from 'moment';


const Countdown = () => {
    const [timeThen, setTimeThen] = useState(moment().add('minutes', 2).format('YYYY-MM-DD HH:mm'))

    const { setFlag, remaining } = useCountDown(timeThen);


    console.log('timeThen', timeThen)
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeThen(e.target.value);
        console.log('e.target.value', e.target.value)
    };

    const handleStartCountdown = () => {
        setFlag(prev => !prev)
    };

    console.log('remaining', remaining)


    return (
        <div>
            <h1 >Countdown Timer Page</h1>
            <div>
                <label>
                    Select a Date:
                    <input type="date" onChange={handleDateChange} value={timeThen} />
                </label>
                <button onClick={handleStartCountdown}> ON / OFF</button>
            </div>
            <div>
                <pre>
                    <h2>Days:{remaining.days} Hour:{remaining.hours} Minute:{remaining.minutes} Second:{remaining.seconds}</h2>
                    {/* {JSON.stringify(remaining)} */}
                </pre>
            </div>
        </div>
    )
}
export default Countdown;
