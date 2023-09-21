'use client'
import { useEffect, useState } from 'react';
import useCountDown from './useCountdown';
import moment from 'moment';
import styles from './down.module.scss'

const Countdown = () => {
    const [timeThen, setTimeThen] = useState(moment().format('YYYY-MM-DD HH:mm'))

    const { setFlag, remaining } = useCountDown(timeThen);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeThen(e.target.value);
    };

    const handleStartCountdown = () => {
        setFlag(prev => !prev)
    };

    return (
        <div className={styles.container}>
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
                </pre>
            </div>
        </div>
    )
}
export default Countdown;
